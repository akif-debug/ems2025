import React from 'react';

const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Helo guys');
  };
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20'>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className='flex flex-col items-center justify-center'
        >
          <input
            className='outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 rounded-full py-3 px-5 text-xl'
            type='email'
            required
            placeholder='Enter your email'
          />
          <input
            type='password'
            placeholder='Enter your password'
            required
            className='outline-none bg-transparent mt-3 placeholder:text-gray-400 border-2 border-emerald-600 rounded-full py-3 px-5 text-xl'
          />
          <button className='mt-5 text-white outline-none placeholder:text-white bg-emerald-600 w-full rounded-full py-3 px-5 text-xl'>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
