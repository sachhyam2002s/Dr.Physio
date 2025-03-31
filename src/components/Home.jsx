import React from 'react'

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
                    <button><a href="contact.html">Appointment &#8658;</a></button>
                </div>
            </div>
        </div>

        <div className="image">
            <img src="luisha3.png" alt="Dr.Luisha"/>
        </div>

        <div id="quote">
            <p className="quote-text">
                <i><q>I'm here to provide expert care,guidance through your health recovery, and help you live a healthier life.</q></i><br/><b>- <abbr title="Doctor">Dr. </abbr>Luisha Shrestha</b>
            </p>
        </div>
    </div>
    <div className="section">
        <div className="div1">
            <h3>Successful Diagnosis</h3>
            <p>Ensuring accurate and timely care.</p>
            <h2>500+</h2>
        </div>
        <div className="div2">
            <h3>Recover Success Rate</h3>
            <p>Helping patients recover optimal health.</p>
            <h2>90%</h2>
        </div>
        <div className="div3">
            <h3>On-Time Consultation</h3>
            <p>Your time is our priority.</p>
            <h2>90%</h2>
        </div>
        <div className="div4">
            <h3>Specialized Techniques</h3>
            <p>Using advanced equipments and techniques.</p>
            <h2>100+</h2>
        </div>
    </div>
    </>
  )
}
