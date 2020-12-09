/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Select({label, id, name, value, options, isRequired, handleValue}) {
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
      <select
        className={`custom-select form-control ${error.length > 0 ? `is-invalid` : ''}`}
        id={id}
        value={val}
        onChange={handleChange}
        name={name}
        required={isRequired}
      >
        <option disabled={isRequired} value="">Choose...</option>
        {options.map((item, idx) => {
          const val = typeof item === 'object' ? (item.length > 1 ? item[1] : item[0]) : item;
          const text = typeof item === 'object' ? item[0] : item;
          return <option key={`${id}-key-${idx}`} value={val}>{text}</option>;
        })}
      </select>
      {error.length > 0 && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleValue: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

Select.defaultProps = {
  value: '',
  isRequired: false,
};