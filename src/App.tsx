import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ExpenseProvider } from './context/ExpenseContext';
import Home from './pages/Home';
import ExpenseListPage from './pages/ExpenseListPage';
import AddEditExpensePage from './pages/AddEditExpensePage';

const App: React.FC = () => {
  return (
    <ExpenseProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expenses" element={<ExpenseListPage />} />
          <Route path="/add" element={<AddEditExpensePage />} />
          <Route path="/edit/:id" element={<AddEditExpensePage />} />
        </Routes>
      </Router>
    </ExpenseProvider>
  );
};

export default App;

