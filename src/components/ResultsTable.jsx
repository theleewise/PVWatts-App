import React from 'react';
import PropTypes from 'prop-types';

const ResultsTable = ({ acMonthly, poa }) => {
  const monthName = (num) => {
    const names = ['Janaruy', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return names[num];
  };

  const chunkArr = (arr, len) => {
    const chunks = [];
    const n = arr.length;
    let i = 0;
    while (i < n) { chunks.push(arr.slice(i, i += len)); }
    return chunks;
  };

  const days = chunkArr(poa, 24);

  return (
    <div>
      {acMonthly && (
        <table className="table table-striped table-dark table-bordered">
          <thead>
            <tr>
              <th>Month</th>
              <th>Monthly AC system output. (kWhac)</th>
            </tr>
          </thead>
          <tbody>
            {acMonthly.map((row, idx) => (
              <tr>
                <td>{monthName(idx)}</td>
                <td>{row}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {days && (
        <table className="table table-striped table-dark table-bordered">
          <thead>
            <tr>
              <th>Day</th>
              {[...Array(24)].map((_, i) => <th>{`Hour ${i + 1}`}</th>)}
            </tr>
          </thead>
          <tbody>
            {days.map((row, dayNum) => (
              <tr>
                <td>{`Day ${dayNum + 1}`}</td>
                {row.map((hour) => <td>{hour > 0 && hour}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ResultsTable;

ResultsTable.propTypes = {
  acMonthly: PropTypes.arrayOf(PropTypes.number).isRequired,
  poa: PropTypes.arrayOf(PropTypes.number).isRequired,
};
