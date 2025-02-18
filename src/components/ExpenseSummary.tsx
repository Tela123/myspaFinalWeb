import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const ExpenseSummary: React.FC = () => {
  const { expenses } = useContext(ExpenseContext)!;

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold">Résumé des Dépenses</h2>
      <p>Dépenses Totales: {totalExpenses} €</p>
    </div>
  );
};

export default ExpenseSummary;
