import React from 'react'
import { Link } from 'react-router-dom'


function Signup() {
  return (
    <>
    <nav className='bg-blue-600 text-white flex justify-between items-center px-6 py-4'>
<h1 className='text-xl font-semibold'>IT-Bazaar</h1>
<Link to='/' className='text-white hover:font-bold'>Home</Link>
</nav>
  <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        
        {/* Left Side */}
        <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-blue-400 text-white flex flex-col justify-center items-center p-8">
          <h2 className="text-2xl font-bold mb-4">Come join us!</h2>
          <p className="text-center mb-6 px-4">
            We are so excited to have you here. If you haven’t already, create an account to get access to exclusive offers, rewards, and discounts.
          </p>
          <Link to="/login" className="bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 text-white text-sm transition"> Already have an account? Sign in.</Link>
        </div>

        {/* Right Side - Signup Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup