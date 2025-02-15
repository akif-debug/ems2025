import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('email is', email);
    console.log('password is', password);
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type='password'
            placeholder='Enter your password'
            required
            className='outline-none bg-transparent mt-3 placeholder:text-gray-400 border-2 border-emerald-600 rounded-full py-3 px-5 text-xl'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
