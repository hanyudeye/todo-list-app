import React from 'react';

function TaskList({ tasks, onSelectTask }) {
  return (
    <div className="grid grid-cols-2 gap-2 mb-4">
      {tasks.map(task => (
        <button
          key={task.id}
          className="p-2 bg-gray-100 rounded"
          onClick={() => onSelectTask(task)}
        >
          {task.name}
        </button>
      ))}
    </div>
  );
}

export default TaskList;
