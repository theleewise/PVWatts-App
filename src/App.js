/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFetch } from './hooks';
import ResultsTable from './components/ResultsTable';
import Form from './components/Form';

export default function App() {
  const url = 'https://developer.nrel.gov/api/pvwatts/v6.json?';
  const defaultUrlParams = {
    api_key: 'Pe94WWsLk3PoPXObJEX4yxGcfXRNiDIwxVdZwCzq',
    timeframe: 'hourly',
    format: 'json',
  };
  const {
    data, isLoading, updateParams, hasError, errorMessage,
  } = useFetch(url, defaultUrlParams, true);
  const [params, setParams] = useState(defaultUrlParams);
  const [displayResults, setDisplayResults] = useState(false);

  useEffect(() => { if (errorMessage) { console.error(errorMessage.errors); } }, [errorMessage]);
  useEffect(() => {
    if (!hasError && data && data.outputs) { setDisplayResults(true); }
  }, [hasError, data]);

  const handleInputChange = (name, val) => {
    const isEmpty = name.length <= 0;
    if (isEmpty) return;
    setDisplayResults(false);
    setParams((prevState) => {
      const newParams = { ...prevState };
      newParams[name] = val;
      return newParams;
    });
  };

  const handleSubmit = () => updateParams(params);

  const handleBack = () => setDisplayResults(false);

  return (
    <div className="container">

      {hasError && !isLoading && (
        <div className="mt-4 alert alert-danger" role="alert">
          <strong>Oh No!</strong>
          Something went wrong.
          {errorMessage.errors && (
            <ul>
              {errorMessage.errors.map((message) => <li>{message}</li>)}
            </ul>
          )}
        </div>
      )}

      {!displayResults && !isLoading && (
        <Form handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
      )}

      {isLoading && (
        <div className="py-5 text-center">
          <div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div>
        </div>
      )}

      {data && displayResults && !isLoading && (
        <div className="my-4">
          <ResultsTable acMonthly={data.outputs.ac_monthly} poa={data.outputs.poa} />
          <button type="button" className="btn btn-secondary" onClick={handleBack}>Back to Form</button>
        </div>
      )}
    </div>
  );
}
