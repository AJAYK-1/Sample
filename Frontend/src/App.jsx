import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Registerpage from './components/register'
import AdminLogin from './components/admin/adminlogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Registerpage/> */}
      <AdminLogin/>
    </>
  )
}

export default App
