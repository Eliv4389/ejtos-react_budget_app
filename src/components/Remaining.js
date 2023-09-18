import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 

const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext); // Added currency here
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{budget - totalExpenses}</span> {/* Updated here */}
        </div>
    );
};

export default Remaining;
