import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'; // Importing icons from react-icons
import './Contact.css'; // Import the CSS file

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
      });

    e.target.reset();
  };

  return (
    <>
      <section id="contact">
        <div className="container">
          <h2>Contact</h2>
          <form onSubmit={sendEmail}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" className="form-control" rows="4" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Email</button>
          </form>
          <ul>
            <li>
              <FaEnvelope className="icon" /> <strong>Email:</strong> <a href="mailto:hrithikm247@gmail.com">hrithikm247@gmail.com</a>
            </li>
            <li>
              <FaLinkedin className="icon" /> <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/hrithik-maurya-792995253/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            </li>
            <li>
              <strong>Phone no:</strong> <a href="tel:+919324544634">+919324544634</a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon fa fa-instagram" style={{ color: '#e4405f' }}></a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon fa fa-facebook" style={{ color: '#3b5998' }}></a>
              <a href="https://github.com/h-hritik" target="_blank" rel="noopener noreferrer" className="icon fa fa-github" style={{ color: '#333' }}></a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default Contact