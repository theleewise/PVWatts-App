/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="systemCapacityInput">Nameplate Capacity (kW).</label>
        <input id="systemCapacityInput" type="range" min="0.05" max="500000" step="10" className="form-control-range" />
      </div>
      <div className="form-group">
        <label htmlFor="moduleTypeInput">Module Type</label>
        <select className="form-control" id="moduleTypeInput">
          <option value="0">Standard</option>
          <option value="1">Premium</option>
          <option value="2">Thin film</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="systemLossesInput">System Losses (percent)</label>
        <input type="range" min="-5" max="99" step="1" className="form-control-range" id="lossesInput" />
      </div>
      <div className="form-group">
        <label htmlFor="arrayTypeInput">Array Type</label>
        <select className="form-control" id="arrayTypeInput">
          <option value="0">Fixed - Open Rack</option>
          <option value="1">Fixed - Roof Mounted</option>
          <option value="2">1-Axis</option>
          <option value="3">1-Axis Backtracking</option>
          <option value="4">2-Axis</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="titleInput">Title Angle (degrees)</label>
        <input type="range" min="0" max="99" step="1" className="form-control-range" id="titleInput" />
      </div>
      <div className="form-group">
        <label htmlFor="azimuthAngleInput">Azimuth Angle (degrees)</label>
        <input type="range" min="0" max="99" step="1" className="form-control-range" id="azimuthAngleInput" />
      </div>
    </div>
  );
}
