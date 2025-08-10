import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
<div className='min-h-screen flex flex-col'>
  <nav className='bg-blue-600 text-white flex justify-between items-center px-6 py-4'>
<h1 className='text-xl font-semibold'>IT-Bazaar</h1>
<Link to='/' className='text-white hover:font-bold'>Home</Link>
</nav>
<main className='flex flex-col md:flex-row flex-1'>
<div className='md:w-1/2 bg-gradient-to-br from-blue-500 to-blue-400 text-white flex flex-col justify-center items-center p-10'>
<h2 className='text-2xl font-bold mb-4'>New Here?</h2>
<p className='mb-6 text-center'>Then Sign Up and Start Ordering!</p>
<button className='border border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-500 transition'><Link to="/signup">SIGN UP</Link></button>
</div>

<div className='md:w-1/2 bg-white flex flex-col justify-center items-center p-10'>
<h2 className='text-2xl font-semibold mb-6'>Sign In</h2>
<form className='w-full max-w-xs'>
  <div className='mb-4'> 
<input type="email" placeholder='Email' className='w-full px-4 py-2 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-blue-400' required/>
  </div>
  <div className="mb-4">
    <input type="password" placeholder='Password' className='w-full px-4 py-2 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-blue-400' required/>
  </div>
  <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition'>LOGIN</button>
  <div className="text-center mt-3">
    <a href="" className='text-sm text-blue-500 hover:underline'> Forgot Password?</a>
  </div>
</form>
</div>
</main>
</div>

  )
}

export default Login