import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ExpenseForm from '../components/ExpenseForm';
import { ExpenseContext } from '../context/ExpenseContext';

const AddEditExpensePage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const { expenses, updateExpense } = useContext(ExpenseContext)!;

  const expenseToEdit = id ? expenses.find(expense => expense.id === Number(id)) : null;

  const handleSubmit = (expense: any) => {
    if (expenseToEdit) {
      updateExpense(expense);
    }
    // Rediriger ou afficher un message de succès ici
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">{expenseToEdit ? "Modifier la Dépense" : "Ajouter une Dépense"}</h1>
      <ExpenseForm expense={expenseToEdit} onSubmit={handleSubmit} />
    </div>
  );
};

export default AddEditExpensePage;
