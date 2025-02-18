import React, { useState } from 'react';
import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const ExpenseForm: React.FC<{ expense?: any; onSubmit: (expense: any) => void }> = ({ expense, onSubmit }) => {
  const [amount, setAmount] = useState(expense ? expense.amount : '');
  const [date, setDate] = useState(expense ? expense.date : '');
  const [category, setCategory] = useState(expense ? expense.category : '');
  const [description, setDescription] = useState(expense ? expense.description : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ id: expense ? expense.id : Date.now(), amount: Number(amount), date, category, description });
    setAmount('');
    setDate('');
    setCategory('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg">
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Montant" required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Catégorie" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Ajouter / Modifier Dépense</button>
    </form>
  );
};

export default ExpenseForm;
