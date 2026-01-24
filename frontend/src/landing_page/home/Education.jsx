
import React from 'react'

function Education() {
  return (
    <div className='container my-5'>
      <div className="row align-items-center">

        {/* Image Section */}
        <div className="col-lg-6 col-md-12 text-center mb-4 fade-left mt-5">
          <img
            src='/src/assets/education.svg'
            alt="education"
            className='img-fluid'
          />
        </div>

        {/* Content Section */}
        <div className="col-lg-6 col-md-12 fade-right mt-4">
          <h1 className='mb-3 fs-2 fade-up'>
            Free and open market education
          </h1>

          <p className='fade-up delay-1'>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a
            href=''
            className='d-inline-block mb-4 text-decoration-none fade-up delay-2'
          >
            Varsity →
          </a>

          <p className='mt-4 fade-up delay-3'>
            TradingQ&A, the most active trading and investment community in India
            for all your market related queries.
          </p>

          <a
            href=''
            className='text-decoration-none fade-up delay-4'
          >
            TradingQ&A →
          </a>
        </div>

      </div>
    </div>
  )
}

export default Education
