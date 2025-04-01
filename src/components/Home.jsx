import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <div id="container">
        <div className="context">
            <div className="text">
                <i><b>Physiotherapist</b></i>
                <h1><span className="gradient-text">Achieve the best version <br/>of your health.</span></h1>
                <p>Take the better step toward better health with personalized care.<br/> Physiotherapy is not just about healing the body, it's about empowering the patient to take control of their own health.</p>
                <div className="button">
                    <button><Link to="/contact">Appointment &#8658;</Link></button>
                </div>
            </div>
        </div>

        <div className="image">
            <img className="" src="luisha3.png" alt="Dr.Luisha"/>
        </div>

        <div id="quote">
            <p className="quote-text">
                <i><q>I'm here to provide expert care,guidance through your health recovery, and help you live a healthier life.</q></i><br/><b>- <abbr title="Doctor">Dr. </abbr>Luisha Shrestha</b>
            </p>
            <img className="" src="physiotherapy1.jpg" alt="Physiotherapy" />
        </div>
    </div>
    </>
  )
}
