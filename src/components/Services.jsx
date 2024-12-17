import React from 'react'
import Em from './images/Em.jpeg';
import ss from './images/ss.jpeg';
import dt from './images/dt.jpeg';
import ms from './images/ms.jpeg';
import c from './images/c.jpeg';
import os from './images/os.jpeg';
const Services = () => {
  return (
    <div>
      {/* <!-- Services Section --> */}
<section class="services">
  <div class="container3">
    <h2 class="section-title">Our Services</h2>
    <div class="services-grid">
      
      {/* <!-- Service 1 --> */}
      <div class="service-item">
        <img src={Em} alt="Emergency Care"/>
        <h3>Emergency Care</h3>
        <p>Our emergency department is available 24/7 to provide urgent medical care for life-threatening conditions.</p>
      </div>

      {/* <!-- Service 2 --> */}
      <div class="service-item">
        <img src={ss} alt="Surgery Services"/>
        <h3>Surgery Services</h3>
        <p>We offer a wide range of surgical services, including minimally invasive procedures and advanced surgeries.</p>
      </div>

      {/* <!-- Service 3 --> */}
      <div class="service-item">
        <img src={dt} alt="Diagnostic Testing"/>
        <h3>Diagnostic Testing</h3>
        <p>Our state-of-the-art diagnostic facilities provide accurate test results to guide your treatment plan.</p>
      </div>

      {/* <!-- Service 4 --> */}
      <div class="service-item">
        <img src={ms} alt="Maternity Services"/>
        <h3>Maternity Services</h3>
        <p>We offer comprehensive maternity care, from prenatal check-ups to post-delivery care for mother and baby.</p>
      </div>

      {/* <!-- Service 5 --> */}
      <div class="service-item">
        <img src={c} alt="Cardiology"/>
        <h3>Cardiology</h3>
        <p>Our cardiology department provides expert care for heart-related conditions, including diagnostics and treatment plans.</p>
      </div>

      {/* <!-- Service 6 --> */}
      <div class="service-item">
        <img src={os} alt="Orthopedic Services"/>
        <h3>Orthopedic Services</h3>
        <p>We provide care for bone, joint, and muscle injuries, with both non-surgical and surgical treatment options.</p>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default Services
