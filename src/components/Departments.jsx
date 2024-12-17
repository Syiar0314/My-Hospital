import React from 'react'
import cd from './images/cd.jpeg';
import nd from './images/nd.jpeg';
import pd from './images/pd.jpeg';
import os from './images/os.jpeg';
import gd from './images/gd.jpeg';
import nn from './images/nn.jpeg';
const Departments = () => {
  return (
    <div>
      {/* <!-- Departments Section --> */}
<section class="departments">
  <div class="container4">
    <h2 class="section-title">Our Departments</h2>
    <div class="departments-grid">
      
      {/* <!-- Department 1 --> */}
      <div class="department-item">
        <img src={cd}alt="Cardiology Department"/>
        <h3>Cardiology</h3>
        <p>Our Cardiology department provides comprehensive heart care, including diagnostic tests, treatments, and surgeries.</p>
        <a href="/cardiology" class="department-link">Learn More</a>
      </div>

      {/* <!-- Department 2 --> */}
      <div class="department-item">
        <img src={nd} alt="Neurology Department"/>
        <h3>Neurology</h3>
        <p>We offer expert care for neurological conditions, including stroke, epilepsy, and neurodegenerative diseases.</p>
        <a href="/neurology" class="department-link">Learn More</a>
      </div>

      {/* <!-- Department 3 --> */}
      <div class="department-item">
        <img src={pd} alt="Pediatrics Department"/>
        <h3>Pediatrics</h3>
        <p>Our Pediatric department specializes in the care of infants, children, and adolescents, providing preventative care and treatments.</p>
        <a href="/pediatrics" class="department-link">Learn More</a>
      </div>

      {/* <!-- Department 4 --> */}
      <div class="department-item">
        <img src={os} alt="Orthopedics Department"/>
        <h3>Orthopedics</h3>
        <p>We provide specialized care for musculoskeletal injuries, including fractures, joint replacements, and sports injuries.</p>
        <a href="/orthopedics" class="department-link">Learn More</a>
      </div>

      {/* <!-- Department 5 --> */}
      <div class="department-item">
        <img src={nn} alt="Oncology Department"/>
        <h3>Oncology</h3>
        <p>Our Oncology department offers comprehensive cancer care, including diagnosis, treatment, and palliative services.</p>
        <a href="/oncology" class="department-link">Learn More</a>
      </div>

      {/* <!-- Department 6 --> */}
      <div class="department-item">
        <img src={gd} alt="Gynecology Department"/>
        <h3>Gynecology</h3>
        <p>We provide expert care for women's health, including routine exams, pregnancy care, and treatments for gynecological conditions.</p>
        <a href="/gynecology" class="department-link">Learn More</a>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default Departments
