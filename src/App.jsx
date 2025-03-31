import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar title="Dr. Physio"/>
      <Home />
      <About />
      <Contact/>
    </>
  )
}

export default App
