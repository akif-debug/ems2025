import React from 'react';

const TaskList = () => {
  return (
    <div
      id='tasklist'
      className='h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap'
    >
      <div className='flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl'>
        <div className='flex justify-between'>
          <h3 className='bg-red-600 px-3'>High</h3>
          <h4 className="">10 feb 2025</h4>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
