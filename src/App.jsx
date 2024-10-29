import React, { useState } from 'react';
import YearTabs from './components/YearTabs';
import TodoList from './components/TodoList';

function App() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <YearTabs selectedYear={selectedYear} onYearChange={handleYearChange} />
      <TodoList year={selectedYear} />
      hello,nice to meet you
      鹿晗，米线
    </div>
  );
}

export default App;
