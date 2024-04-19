// Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="header">
        <h1>Contact Us</h1>
      </header>
      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: beyondmeat@gmail.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 888 N. Douglas Street, Suite 100 El Segundo, CA 90245</p>
      </section>
      <section className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <label>Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Message</label>
          <textarea rows="4"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
