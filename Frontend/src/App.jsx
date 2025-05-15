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
import Userhome from './components/user/userhome'
import LoginPage from './components/login'
import Orderpage from './components/user/orderpage'
import Cartpage from './components/user/cartpage'

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
          <Route path='/' element={<LoginPage />} />
          <Route path='/userhome' element={<Userhome />} />
          <Route path='/orderpage' element={<Orderpage />} />
          <Route path='/cartpage' element={<Cartpage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
