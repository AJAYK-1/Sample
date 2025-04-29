import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Registerpage from './components/register'
import AdminLogin from './components/admin/adminlogin'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import AdminViewUser from './components/admin/adminviewuser'
import AdminHome from './components/admin/adminhome'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './components/admin/adminaddpro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminHome />} />
          <Route path='/adminviewuser' element={<AdminViewUser />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/adminaddpro' element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
