import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Range from './Range';
import Input from './Input';
import Select from './Select';

export default function Form({ handleSubmit, handleInputChange }) {
  const [fieldValues, setFieldValues] = useState({});

  const handleValue = (name, val) => {
    setFieldValues((prevState) => {
      const newVals = { ...prevState };
      newVals[name] = val;
      return newVals;
    });
    handleInputChange(name, val);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFieldValues({});
  };

  return (
    <div className="my-4">
      <div className="row">
        <div className="col-md-4">
          <Input
            id="addressInput"
            label="Address"
            name="address"
            value={fieldValues.address}
            isRequired
            handleValue={handleValue}
          />
        </div>
        <div className="col-md-4">
          <Select
            id="moduleTypeInput"
            label="Module Type"
            value={fieldValues.module_type}
            name="module_type"
            options={[['Standard', 0], ['Premium', 1], ['Thin film', 2]]}
            isRequired
            handleValue={handleValue}
          />
        </div>
        <div className="col-md-4">
          <Select
            id="arrayTypeInput"
            label="Array Type"
            value={fieldValues.array_type}
            name="array_type"
            options={[['Fixed - Open Rack', 0], ['Fixed - Roof Mounted', 1], ['1-Axis', 2], ['1-Axis Backtracking', 3], ['2-Axis', 4]]}
            isRequired
            handleValue={handleValue}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Range
            id="systemCapacityInput"
            value={fieldValues.system_capacity}
            name="system_capacity"
            label="Nameplate Capacity (kW)."
            min={0.05}
            max={500000}
            step={10}
            handleValue={handleValue}
          />
        </div>
        <div className="col-md-6">
          <Range
            id="systemLossesInput"
            value={fieldValues.losses}
            name="losses"
            label="System Losses (percent)"
            min={-5}
            max={99}
            handleValue={handleValue}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Range
            id="titleInput"
            value={fieldValues.tilt}
            name="tilt"
            label="Title Angle (degrees)"
            min={0}
            max={99}
            handleValue={handleValue}
          />
        </div>
        <div className="col-md-6">
          <Range
            id="azimuthAngleInput"
            value={fieldValues.azimuth}
            name="azimuth"
            label="Azimuth Angle (degrees)"
            min={0}
            max={99}
            handleValue={handleValue}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      {Object.keys(fieldValues).length > 0 && <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset</button>}
    </div>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
