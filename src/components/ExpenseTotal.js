import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext); // Added currency
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='alert alert-primary'>
            {/* Updated this line to use the selected currency */}
            <span>Spent so far: {currency}{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;
