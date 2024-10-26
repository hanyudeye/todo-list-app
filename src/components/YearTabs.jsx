import React from 'react';

function YearTabs({ selectedYear, onYearChange }) {
  const years = [2022, 2023, 2024]; // 可以根据需要调整年份

  return (
    <div className="year-tabs">
      {years.map(year => (
        <button
          key={year}
          onClick={() => onYearChange(year)}
          className={selectedYear === year ? 'active' : ''}
        >
          {year}
        </button>
      ))}
    </div>
  );
}

export default YearTabs;
