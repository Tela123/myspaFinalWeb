import React from 'react';
import ExpenseList from '../components/ExpenseList';

const ExpenseListPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Liste des Dépenses</h1>
      <ExpenseList />
    </div>
  );
};

export default ExpenseListPage;
