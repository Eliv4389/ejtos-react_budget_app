import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, expenses, dispatch, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget.toString()); // convert to string
  const [errorMessage, setErrorMessage] = useState('');

  // Calculate total expenses
  const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

  // Function to handle budget change
  const handleBudgetChange = (event) => {
    const value = event.target.value;
    
    setNewBudget(value);

    const intValue = parseInt(value, 10);
    
    if (isNaN(intValue)) {
      setErrorMessage(`Please enter a valid number.`);
      return;
    }

    if (intValue > 20000) {
      setErrorMessage(`Budget cannot be more than ${currency}20,000.`);
      return;
    }

    if (intValue < totalExpenses) {
      setErrorMessage(`Budget cannot be less than current spending (${currency}${totalExpenses}).`);
    } else {
      setErrorMessage('');
    }
  };

  // Function to update global budget
  const handleUpdateBudget = () => {
    const intValue = parseInt(newBudget, 10);

    if (!isNaN(intValue) && intValue >= totalExpenses && intValue <= 20000) {
      dispatch({ type: 'SET_BUDGET', payload: intValue });
      setErrorMessage('');
    }
  };

  // Effect to update displayed budget when the context changes
  useEffect(() => {
    setNewBudget(budget.toString()); // convert to string
  }, [budget]);

  return (
    <div className='alert alert-secondary'>
      <span>Budget: {currency}{budget}</span>
      <input
        type="number"
        placeholder={`${currency} Budget Value`}
        min={totalExpenses}
        max="20000"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      />
      <button onClick={handleUpdateBudget}>Update Budget</button>
      {errorMessage && <div className="alert alert-danger mt-2">{errorMessage}</div>}
    </div>
  );
};

export default Budget;
