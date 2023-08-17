import React from "react";

const contactForm = () => {
  return (
    <form
      name="contact"
      action="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea name="message" required></textarea>
      </div>
      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default contactForm;
