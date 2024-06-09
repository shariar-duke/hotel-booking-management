import React from 'react'

export default function LoginForm() {
  return (
    <form className='flex flex-col my-6'>
      <div className='flex flex-col gap-[10px]'>
        <label htmlFor="email">Email Address</label>
        <input className="border border-black/20 rounded-md py-2 px-4"type="email" name="email" id="email" />
      </div>
      <div className='flex flex-col gap-[10px]'>
        <label htmlFor="password">Password</label>
        <input className="border border-black/20 rounded-md py-2 px-4"  type="password" name="password" id="password" />
      </div>
      <button type='submit' className='btn-primary w-full mt-4'>Login</button>
    </form>
  )
}
