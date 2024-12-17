import React from 'react'

const Contact = () => {
  return (
    <div>
      {/* <!-- Contact Us Section --> */}
<section class="contact-us">
  <div class="container5">
    <h2 class="section-title">Contact Us</h2>
    
    <div class="contact-info">
      <div class="contact-details">
        <h3>Our Location</h3>
        <p><strong>Address:</strong> Doctors Hospital , Gojra Road ,Jhang Sadar.</p>
        
        <h3>Contact Information</h3>
        <p><strong>Phone:</strong> +92 3187105589</p>
        <p><strong>Email:</strong> DoctorsHospital0314@gmail.com</p>
        
        <h3>Business Hours</h3>
        <p><strong>Monday to Friday:</strong> 9:00 AM - 6:00 PM</p>
        <p><strong>Saturday:</strong> 9:00 AM - 1:00 PM</p>
        <p><strong>Sunday:</strong> Closed</p>
      </div>

      <div class="contact-form">
        <h3>Send Us a Message</h3>
        <form action="/submit-form" method="post">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" required placeholder="Enter your name"/>
          </div>
          
          <div class="form-group">
            <label for="email">Your Email</label>
            <input type="email" id="email" name="email" required placeholder="Enter your email"/>
          </div>
          
          <div class="form-group">
            <label for="message">Your Message</label>
            <textarea id="message" name="message"  placeholder="Enter your message"></textarea>
          </div>
          
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
    
  </div>
</section>

    </div>
  )
}

export default Contact
