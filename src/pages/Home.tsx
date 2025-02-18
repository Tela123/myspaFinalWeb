import React from 'react';
import ExpenseSummary from '../components/ExpenseSummary';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Résumé des Dépenses</h1>
      <p className="mt-2">Dépenses totales du mois en cours: CFA 0</p>
      <ExpenseSummary />
    </div>
  );
};

export default Home;
