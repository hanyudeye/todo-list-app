import React from 'react';
import TodoList from './components/TodoList';
import YearTabs from './components/YearTabs';
import WelcomeDiv from './components/WelcomeDiv';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">待办清单</h1>
      <YearTabs />
      <TodoList />
      <WelcomeDiv />
      <div>niheoa
        <button>nihao</button>
      </div>
    </div>
  );
}

export default App;