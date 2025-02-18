import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const ExpenseList: React.FC = () => {
  const { expenses } = useContext(ExpenseContext)!;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Liste des Dépenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.date}: {expense.amount} € - {expense.category} - {expense.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
