import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (      
    <nav className="navbar">
        <div className="title">
            <img width="30rem" src="./physio-logo.jpg" alt="logo" />
            <Link to="/"><strong>{props.title}</strong></Link>
        </div>
        <div className="nav-list">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="contact">Contact</Link>
        </div>
        <div className="appoint">
            <button><Link to="/contact">Appointment &#8658;</Link></button>
        </div>
    </nav>
  )
}
