// import { useState } from 'react'

import Navbar from './pages/Navbar/Navbar.jsx'
import { Outlet } from "react-router-dom";
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
