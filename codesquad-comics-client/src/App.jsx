import { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Admin from './components/Admin'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Home />
    <Login />
    <Signup />
    <Admin />
    <About />
    <Create />
    <Footer />

    </>
  )
}

export default App
