import React from 'react';

function Results({ all, wrong, btn }) {
  const accuracy = 100 - ((wrong / all) * 100);
  const wpm = all - wrong;

  

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Results</h2>
          <button onClick={btn} className="text-gray-600 hover:text-gray-800">
              Try Again
          </button>
        </div>
        <div className="mb-2">
          <label className="font-medium">Words Per Minute (WPM):</label>
          <div>{wpm}</div>
        </div>
        <div>
          <label className="font-medium">Accuracy:</label>
          <div>{accuracy.toFixed(2)}%</div>
        </div>
      </div>
    </div>
  );
}

export default Results;
