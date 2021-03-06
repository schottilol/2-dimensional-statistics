/** @format */

import React from 'react';

const toFixedFive = value => Number(value.toFixed(5));

class StatisticDetails extends React.Component {
  renderQualityText(quality) {
    switch (true) {
      case quality >= 0.9:
        return 'Hervorragende Qualität';
      case quality < 0.9 && quality > 0.7:
        return 'Gute Qualität';
      case quality <= 0.7 && quality > 0.5:
        return 'Mäßige Qualität (Abweichungen von bis zu 25% möglich)';
      case quality <= 0.5:
        return 'Modell nicht anwendbar';
      default:
        return 'Error';
    }
  }

  render() {
    const {
      mean,
      variance,
      covariance,
      correlationCoefficient,
      regression,
    } = this.props;

    return (
      <>
        <h3>Auswertung</h3>
        <ul className="list-group">
          <li
            className="list-group-item p-0"
            style={{ border: 'none', background: 'none' }}
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Mittelwerte</h5>
            </div>
            <div>x: {toFixedFive(mean.x)}</div>
            <div>y: {toFixedFive(mean.y)}</div>
          </li>
          <li
            className="list-group-item p-0"
            style={{ border: 'none', background: 'none' }}
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Varianzen</h5>
            </div>
            <div>x: {toFixedFive(variance.x)}</div>
            <div>y: {toFixedFive(variance.y)}</div>
          </li>
          <li
            className="list-group-item p-0"
            style={{ border: 'none', background: 'none' }}
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Kovarianz</h5>
            </div>
            <span>{toFixedFive(covariance)}</span>
          </li>
          <li
            className="list-group-item p-0"
            style={{ border: 'none', background: 'none' }}
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Korrelationskoeffizient</h5>
            </div>
            <span>{toFixedFive(correlationCoefficient)}</span>
          </li>
          <li
            className="list-group-item p-0"
            style={{ border: 'none', background: 'none' }}
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Regression</h5>
            </div>
            <div>m: {toFixedFive(regression.m)}</div>
            <div>b: {toFixedFive(regression.b)}</div>
            <br />
            <div>Qualität:{toFixedFive(regression.quality)}</div>
            <div>{this.renderQualityText(toFixedFive(regression.quality))}</div>
          </li>
        </ul>
      </>
    );
  }
}

export default StatisticDetails;
