import React, { useState } from "react";
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your email submission logic here (e.g., using an email API)
    console.log(formData);
  };

  return (
    <div className="contact-container">
      {/* About Section */}
      <section className="about-section">
        <img src="/self-pic.JPG" alt="My pic" className="profile-image" />
        <div className="about-text">
          <h2 className="about-header">About Me</h2>
          <p>I'm Charlie, an aspiring software developer. I currently am a junior studying Computer Science 
            at the Luddy School of Informatics, Computing, and Engineering, picking up a minor in Business as well.<br></br><br></br>
          I focus on optimizing front-end interfaces and experiences to drive growth
          satisfaction, and retention. I'm proficient in Java, C, and Swift, with a strong foundation in analyzing user behavior,
          designing intuitive solutions, and leveraging technology to enhance customer engagement. I'm experienced with web and
          mobile development to align with marketing strategies and business maximization schemes.<br></br><br></br> I’m excited to gain hands-on 
          work experience and develop further while contributing to innovative projects and growing my professional network.</p>
        </div>
      </section>

      {/* Contact Section */}
      <h2 className="about-header">Contact Me</h2>
      <section className="contact-section">

        {/* my contact info */}
        <div className="contact-details">
          <h4 className="form-header">- My Info -</h4>
          <p>Mobile Phone - <a href="tel:+17737820064">+1 (773)782-0064</a></p>
          <p>Personal Email - <a href="mailto:charliecarroll222@gmail.com">charliecarroll222@gmail.com</a></p>
          <p>IU Email - <a href="mailto:chajcarr@iu.edu">chajcarr@iu.edu</a></p>
        </div>
        
        {/* Contact form */}
        <div className="contact-form-container">
          <h4 className="form-header">Send a Message!</h4>
          <form onSubmit={handleSubmit} className="contact-form">
            <input 
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
            <button type="submit">Send Message</button>
          </form>
          </div>
      </section>

      {/* Social Links Section */}
      <section className="social-links">
        <a href="https://www.linkedin.com/in/charlie-carroll2/" target="_blank" rel="noopener noreferrer">
          <button className="li-button">LinkedIn Profile</button>
        </a>
        <a href="https://github.com/charliecarroll222" target="_blank" rel="noopener noreferrer">
          <button className="gh-button">GitHub Profile</button>
        </a>
        <a href="https://iubloomington.joinhandshake.com/profiles/bkh6m6" target="_blank" rel="noopener noreferrer">
          <button className="hs-button">Handshake Profile</button>
        </a>
      </section>
    </div>
  );
}

export default Contact;