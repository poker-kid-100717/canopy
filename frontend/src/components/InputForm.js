import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [allocationAmount, setAllocationAmount] = useState('');
  const [investorAmounts, setInvestorAmounts] = useState([{ name: '', requested_amount: '', average_amount: '' }]);

  const handleChange = (index, event) => {
    const values = [...investorAmounts];
    values[index][event.target.name] = event.target.value;
    setInvestorAmounts(values);
  };

  const handleAddInvestor = () => {
    setInvestorAmounts([...investorAmounts, { name: '', requested_amount: '', average_amount: '' }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      allocation_amount: parseFloat(allocationAmount),
      investor_amounts: investorAmounts.map((investor) => ({
        ...investor,
        requested_amount: parseFloat(investor.requested_amount),
        average_amount: parseFloat(investor.average_amount),
      })),
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Total Allocation Amount"
        value={allocationAmount}
        onChange={(e) => setAllocationAmount(e.target.value)}
        required
      />
      {investorAmounts.map((investor, index) => (
        <div key={index}>
          <input
            name="name"
            placeholder="Investor Name"
            value={investor.name}
            onChange={(e) => handleChange(index, e)}
            required
          />
          <input
            name="requested_amount"
            placeholder="Requested Amount"
            type="number"
            value={investor.requested_amount}
            onChange={(e) => handleChange(index, e)}
            required
          />
          <input
            name="average_amount"
            placeholder="Average Amount"
            type="number"
            value={investor.average_amount}
            onChange={(e) => handleChange(index, e)}
            required
          />
        </div>
      ))}
      <button type="button" onClick={handleAddInvestor}>Add Investor</button>
      <button type="submit">Calculate Proration</button>
    </form>
  );
};

export default InputForm;
