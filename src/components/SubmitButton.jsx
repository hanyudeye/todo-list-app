import React, { useState } from 'react';

function SubmitButton({ onSubmit }) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClick = () => {
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    onSubmit();
    setShowConfirm(false);
  };

  if (showConfirm) {
    return (
      <div>
        <p>确认提交?</p>
        <button onClick={handleConfirm} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
          确认
        </button>
        <button onClick={() => setShowConfirm(false)} className="bg-red-500 text-white px-4 py-2 rounded">
          取消
        </button>
      </div>
    );
  }

  return (
    <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">
      提交
    </button>
  );
}

export default SubmitButton;
