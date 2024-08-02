import React from 'react';

function Displaytext({ displayValue }) {
  return (
    <textarea
      className='mt-10 border-2 border-black w-full h-32 p-4 text-lg leading-loose'
      value={displayValue}
      readOnly
    />
  );
}

export default Displaytext;
