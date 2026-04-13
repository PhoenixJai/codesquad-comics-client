import { useState } from 'react'

import Header from './shared/Header'
import Footer from './shared/Footer'
import Home from './components/Home'

// import Login from './components/Login'
// import Signup from './components/Signup'
// import Admin from './components/Admin'
import './App.css'



function App() {
  const [count, setCount] = useState(0);
const [user, setUser] = useState(localStorage.getItem("user") || {});
  return (
    <>
    <Header user={user} setUser={setUser}/>
    <Home />
    {/* <Login  user={user} setUser={setUser}/>
    <Signup user={user} setUser={setUser}/>
    <Admin />
    <About />
    <Create /> */}
    <Footer />

    </>
  )
}

export default App
