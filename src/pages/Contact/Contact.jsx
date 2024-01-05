
import React from 'react';
import './contact.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { NavLink } from 'react-router-dom';


function Contact() {
  return (
    <div className="contactPage">
      <h1>Contact Us</h1>
      <p>Have questions, feedback, or just want to say hello? We're here for you!</p>

      <div className="contactForm">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" placeholder="Write your message here..."></textarea>

        <button type="submit">Send Message</button>
      </div>

      <div className="contactInfo">
        <h2>Visit Us</h2>
        <p>123 Job Street, Cityville, Country</p>

        <h2>Email Us</h2>
        <p>info@jobwebsite.com</p>

        <h2>Call Us</h2>
        <p>+1 234 567 890</p>
      </div>

      <div className="socialMedia">
        <h2>Connect with Us on Social Media</h2>
        <p>Follow us on social media for the latest job updates, tips, and more!</p>
        <ul>
          <li>
          <NavLink to={'https://www.facebook.com/home.php'}><FaFacebookSquare /></NavLink>

            
          </li>
          <li>
          <NavLink to={'https://twitter.com/i/flow/single_sign_on'}><FaTwitter />
</NavLink>
          </li>
          <li>
          <NavLink to={'https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit'}><FaLinkedin />
</NavLink>
          </li>
          <li>
          <NavLink to={'https://www.youtube.com/'}><IoLogoYoutube />
</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
