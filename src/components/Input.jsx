/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Input({label, id, name, value, isRequired, handleValue}) {
  const [val, setVal] = useState(value);
  const [error, setError] = useState('');

  useEffect(() => setVal(value), [value]);

  const handleChange = (e) => {
    e.preventDefault();
    const thisName = e.target.name;
    const thisVal = e.target.value;
    setError('');
    setVal(thisVal);
    handleValue(thisName, thisVal);
  };
  
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        className={`form-control ${error.length > 0 ? `is-invalid` : ''}`}
        id={id}
        value={val}
        onChange={handleChange}
        name={name}
        required={isRequired}
      />
      {error.length > 0 && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleValue: PropTypes.func.isRequired,
};

Input.defaultProps = {
  value: '',
  isRequired: false,
};