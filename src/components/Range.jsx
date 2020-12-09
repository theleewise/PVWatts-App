/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Range({label, id, name, value, min, max, step, showInput = true, handleValue}) {
  const [val, setVal] = useState(value);
  const [error, setError] = useState('');

  useEffect(() => setVal(value), [value]);

  const handleChange = (e) => {
    e.preventDefault();
    const thisVal = e.target.value;
    if(thisVal > max){
      setError(`Maximum is ${max}`);
      setVal(max);
    }
    else if(thisVal < min){
      setError(`Minimum is ${min}`);
      setVal(min);
    }
    else {
      setError('');
      setVal(thisVal);
    }
  };
  
  const handleChangeEnd = (e) => {
    e.preventDefault();
    const thisName = e.target.name;
    const thisVal = e.target.value;
    setVal(thisVal);
    handleValue(thisName, thisVal);
  };

  return (
    <div className="row">
      <div className="col">
        <div className="form-group">
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            name={name}
            type="range"
            min={min}
            max={max}
            step={step}
            className={`form-control-range ${error.length > 0 ? `is-invalid` : ''}`}
            onChange={handleChange}
            onMouseUp={handleChangeEnd}
            value={val}
          />
          {error.length > 0 && <div className="invalid-feedback">{error}</div>}
        </div>
      </div>
      {showInput && (
        <div className="col-4">
          <input className={`form-control ${error.length > 0 ? `is-invalid` : ''}`} type="number" value={val} onChange={handleChange} onBlur={handleChangeEnd} />
        </div>
      )}
    </div>
  );
}

Range.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  showInput: PropTypes.bool,
  handleValue: PropTypes.func.isRequired,
};

Range.defaultProps = {
  value: 0,
  step: 1,
  showInput: true,
};