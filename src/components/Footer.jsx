import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      {/* <!-- Footer Section --> */}
<footer class="footer">
  <div class="footer-container">
    {/* <!-- Contact Info Section --> */}
    <div class="footer-section">
      <h3>Contact Us</h3>
      <p><strong>Doctors Hospital</strong></p>
      <p>Address: Doctors Hospital , Gojra Road ,Jhang Sadar.</p>
      <p>Phone:  +92 3187105589</p>
      <p>Email: <a href="mailto:info@hospitalname.com">DoctorsHospital0314@gmail.com</a></p>
      <p>Emergency:  +92 3181741051</p>
    </div>

    {/* <!-- Quick Links Section --> */}
    <div class="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Patient Information</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
      </ul>
    </div>

    {/* <!-- Social Media Section --> */}
    <div class="footer-section">
      <h3>Stay Connected</h3>
      <ul class="social-links">
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">LinkedIn</a></li>
      </ul>
    </div>

    {/* <!-- Accreditations Section --> */}
    <div class="footer-section">
      <h3>Accreditations</h3>
      <ul>
        <li><a href="#">Joint Commission Accredited</a></li>
        <li><a href="#">ISO Certified</a></li>
        <li><a href="#">Other Accreditations</a></li>
      </ul>
    </div>
  </div>

  {/* <!-- Bottom Legal Notice and Copyright --> */}
  <div class="footer-bottom">
    <p>© 2024 Hospital Name. All Rights Reserved.</p>
    <p><a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a></p>
    <p>This website is for informational purposes only and does not substitute professional medical advice, diagnosis, or treatment.</p>
  </div>
</footer>

    </div>
  )
}

export default Footer
