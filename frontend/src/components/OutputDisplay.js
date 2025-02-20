import React from 'react';

const OutputDisplay = ({ result }) => {
  return (
    <div>
      <h2>Prorated Investment Breakdown</h2>
      <ul>
        {Object.keys(result).map((name) => (
          <li key={name}>
            {name}: ${result[name]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OutputDisplay;
