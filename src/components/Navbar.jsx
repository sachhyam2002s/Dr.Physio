import React from 'react'

export default function Navbar(props) {
  return (      
    <nav className="navbar">
        <div className="title">
            <img width="30rem" src="./physio-logo.jpg" alt="logo" />
            <a href="#"><strong>{props.title}</strong></a>
        </div>
        <div className="nav-list">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Testimonial</a>
        </div>
        <div className="appoint">
            <button><a href="">Appointment &#8658;</a></button>
        </div>
    </nav>
  )
}
