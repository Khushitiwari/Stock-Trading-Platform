
import React from 'react'

function Team() {
  return (
    <div className="container">

      {/* Heading */}
      <div className="row mt-5 mb-3">
        <div className="col-12">
          <h1 className="text-center">People</h1>
        </div>
      </div>

      {/* Team Member */}
      <div className="row align-items-center justify-content-center mb-4">

        {/* Image */}
        <div className="col-lg-4 col-md-12 text-center mb-3 fade-in">
          <img
            src="/src/assets/smallPic.jpeg"
            alt="Team member"
            className="img-fluid rounded-circle"
            style={{ width: "290px", height: "290px", objectFit: "cover" }}
          />
          <h3 className='mt-3 fade-up'>KhushI Tiwari</h3>
        </div>

        {/* Text */}
        <div className="col-lg-6 col-md-12 text-center text-lg-start">
          < p className="fs-6">
           I am Khushi , a second year curious student who loves to build and create innovative solutions. My expertise lies in MERN stcak development
           and Nextjs , besides this I am also familiar with Typescript and PostgreSQL. I am data science enthusiast.
            I am Khushi , a second year curious student who loves to build and create innovative solutions. My expertise lies in MERN stcak development
           and Nextjs , besides this I am also familiar with Typescript and PostgreSQL. I am data science enthusiast.
            I am Khushi , a second year curious student who loves to build and create innovative solutions. My expertise lies in MERN stcak development
           and Nextjs , besides this I am also familiar with Typescript and PostgreSQL. I am data science enthusiast.
          
          </p>
          <p>Love to Listen music , play badminton and teas friends</p>
          <p>Connect on <a href="https://www.linkedin.com/in/dte-gecbh-com-khooshi-tiwari-a2485a338/" className='text-decoration-none'> LinkedIn</a></p>
        </div>

      </div>
    </div>
  )
}

export default Team
