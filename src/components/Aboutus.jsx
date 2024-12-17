import React from 'react'
import Hospital from './images/download.jpeg';
const Aboutus = () => {
  return (
    <div>
      
  {/* <!-- About Us Section --> */}
  <section className="about-us">
    <div className="container2">
      <h1 className="section-title">About Us</h1>

      <div className="about-content">
        <div className="about-text">
          <h2>Welcome to Doctors Hospital</h2>
          <p>
            At Doctors Hospital, we are dedicated to providing the highest standard of healthcare to our patients.
            With state-of-the-art medical facilities and a compassionate team of doctors, nurses, and staff,
            we are committed to making sure your health comes first.
          </p>
          <p>
            Our hospital offers a wide range of services, including emergency care, surgery, diagnostic testing,
            and specialized treatment options for various medical conditions. Whether you are visiting us for a routine check-up
            or need critical care, we are here to support you every step of the way.
          </p>
        </div>

        <div className="about-image">
          <img src={Hospital} alt="Hospital Building" />
        </div>
      </div>

      <div className="mission-vision">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>To provide high-quality, compassionate care that improves the health and well-being of the communities we serve.</p>
        </div>
        <div className="vision">
          <h3>Our Vision</h3>
          <p>To be a leader in healthcare, setting the standard for clinical excellence, patient satisfaction, and innovation.</p>
        </div>
      </div>

    </div>
  </section>
    </div>
  )
}

export default Aboutus
