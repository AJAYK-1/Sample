import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registerpage from './components/register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Registerpage/>
    </>
  )
}

export default App
