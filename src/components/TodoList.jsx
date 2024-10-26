import React, { useState, useEffect } from 'react';

function TodoList({ year }) {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    // 这里可以根据年份加载对应的待办事项
    // 例如，从本地存储或API获取数据
    console.log(`Loading todos for year ${year}`);
    // 示例：setTodos(loadTodosForYear(year));
  }, [year]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false, year }]);
      setNewTodo('');
    }
  };

  // ... 其他 TodoList 相关的代码 ...

  return (
    <div>
      <h2>Todos for {year}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      {/* 显示待办事项列表 */}
    </div>
  );
}

export default TodoList;
