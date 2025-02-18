import React, { createContext, useState, ReactNode } from 'react';

interface Expense {
  id: number;
  amount: number;
  date: string;
  category: string;
  description: string;
}

interface ExpenseContextType {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  updateExpense: (expense: Expense) => void;
}

export const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const storedExpenses = localStorage.getItem('expenses');
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });

  const addExpense = (expense: Expense) => {
    setExpenses((prev) => {
      const updatedExpenses = [...prev, expense];
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
      return updatedExpenses;
    });
  };

  const updateExpense = (updatedExpense: Expense) => {
    setExpenses((prev) => {
      const updatedExpenses = prev.map(expense =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      );
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
      return updatedExpenses;
    });
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, updateExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};
