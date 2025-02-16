import React from 'react';

const TaskList = () => {
  return (
    <div
      id='tasklist'
      className='h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap'
    >
      <div className='flex-shrink-0 h-full p-5 w-[360px] bg-red-400 rounded-xl'>
        <div className='flex justify-between'>
          <h3 className='bg-red-600 px-3'>High</h3>
          <h4 className=''>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quidem
          molestiae placeat ea repellendus praesentium.
        </p>
      </div>
      <div className='flex-shrink-0 h-full p-5 w-[360px] bg-green-400 rounded-xl'>
        <div className='flex justify-between'>
          <h3 className='bg-red-600 px-3'>High</h3>
          <h4 className=''>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quidem
          molestiae placeat ea repellendus praesentium.
        </p>
      </div>
      <div className='flex-shrink-0 h-full p-5 w-[360px] bg-blue-400 rounded-xl'>
        <div className='flex justify-between'>
          <h3 className='bg-red-600 px-3'>High</h3>
          <h4 className=''>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quidem
          molestiae placeat ea repellendus praesentium.
        </p>
      </div>
      <div className='flex-shrink-0 h-full p-5 w-[360px] bg-yellow-400 rounded-xl'>
        <div className='flex justify-between'>
          <h3 className='bg-red-600 px-3'>High</h3>
          <h4 className=''>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quidem
          molestiae placeat ea repellendus praesentium.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
