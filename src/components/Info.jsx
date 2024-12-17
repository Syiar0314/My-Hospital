import React from 'react'
import doctorImage from './images/doctors.jpg';
const info = () => {
  return (
    <div className='container'>
    <div className="text-container">
      <h1 id='id1'>Get Better Care Of <br /> <b id='id3'>Your  Health</b> </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ratione numquam debitis a, est minima autem eius reiciendis quod dolore. Incidunt harum accusantium quo, animi nisi enim ut ex hic mollitia voluptate, perferendis inventore numquam quasi impedit veritatis quam cupiditate aut repellat? Delectus adipisci ex blanditiis? Officiis aperiam enim, fuga unde mollitia harum ratione quam et reprehenderit eligendi quisquam ullam iusto nesciunt quia alias perferendis! At ullam pariatur blanditiis. Quia.
      </p>
      <br /><br /><br />
      <button className="login-btn" > <a href="https://en.wikipedia.org/wiki/Doctor">Learn More <span class="arrow"></span></a> </button>
    </div>
    
    <div className="image-container">
      <img src={doctorImage} alt="Doctor" />
    </div>
  </div>
  )
}

export default info

