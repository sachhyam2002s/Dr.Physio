import React from 'react'

export default function Contact() {
  return (
    <div class="contact-container">
        <div class="context">
            <h2>Get in Touch <br/>with Dr. Luisha</h2>
            <p>Have any questions or need physiotherapy care?Fill out the form, and we’ll reach out to you soon.Your recovery, mobility, and well-being are our top priorities.</p>
            <a href="mailto:luishastha009@gmail.com">luishastha009@gmail.com</a>
            <a href="tel:+9779841972748">+977 9841972748</a>
        </div>
        <div class="form">
            <form onsubmit="submitForm(event)">
                    <label for="fname">First Name:</label>
                    <input type="text" id="fname" name="firstname" placeholder="Enter your first name" required/>
                    <label for="lname">Last Name:</label>
                    <input type="text" id="lname" name="lastname" placeholder="Enter your last name" required/>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required/>
                    <label for="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required/>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Your message"></textarea>
                    <div class="submit">
                        <input type="submit" value="Submit"/>
                    </div>
            </form>
        </div>
    </div>
  )
}
