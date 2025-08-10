import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Iphone from './pages/Iphone'
import Login from './pages/Login'
import Nothing from './pages/Nothing'
import Oneplus from './pages/Oneplus'
import Samsung from './pages/Samsung'
import Signup from './pages/Signup'


function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/i-phone' element={<Iphone />} />
        <Route path='login' element={<Login />} />
        <Route path='nothing' element={<Nothing />} />
        <Route path='oneplus' element={<Oneplus />} />
        <Route path='samsung' element={<Samsung />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App

