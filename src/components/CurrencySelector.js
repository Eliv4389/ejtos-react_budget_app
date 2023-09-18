import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
  const { dispatch, currency } = useContext(AppContext);

  const changeCurrency = (newCurrency) => {
    console.log('CurrencySelector is rendering');
    dispatch({ type: 'SET_CURRENCY', payload: newCurrency });
  };

  return (
    <select 
      style={{ backgroundColor: 'pink', color: 'blue' }}
      value={currency} 
      onChange={(e) => changeCurrency(e.target.value)}
    >
      <option value="$">Dollar</option>
      <option value="£">Pound</option>
      <option value="€">Euro</option>
      <option value="₹">Rupee</option>
    </select>
  );
};

export default CurrencySelector;
