import React from 'react';

function TaskDetails({ task }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">{task.name}</h2>
      <ol className="list-decimal list-inside">
        {task.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default TaskDetails;
