import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Router> */}
        <Navbar title="Dr. Physio"/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      {/* </Router> */}
    </>
  )
}

export default App
