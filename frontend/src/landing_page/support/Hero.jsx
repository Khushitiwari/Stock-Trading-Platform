import React from 'react'

function Hero() {
  return (
   <section className="container-fluid" id="supportHero">
<div
  id="supportWrapper"
  className="px-3 py-3 d-flex align-items-center justify-content-between"
>
  <h4 className="support-title">Support Portal</h4>
    </div>

    
<div className="row px-3 py-4 mx-md-5" >
  {/* Left */}
  <div className="col-lg-6 col-12 mb-4" >
    <h1 className="fs-4 mb-3">
      Search for an answer or browse help topics to create a ticket
    </h1>

    <input placeholder="Eg. how do I activate F&O" className="mb-3" />

    <div className="d-flex flex-wrap gap-3">
      <a href="#">Track account opening</a>
      <a href="#">Track segment activation</a>
      <a href="#">Intraday margins</a>
      <a href="#">Kite user manual</a>
    </div>
  </div>
 

  {/* Right */}
  <div className="col-lg-6 col-12 px-3 py-3">
   
    <a href="#" className="track-link d-block mb-3 fs-4 support-title">
      Track Tickets
    </a>

    <h1 className="fs-4 mb-3">Featured</h1>

    <ol>
      <li>
        <a href="#">Current Takeover and Delisting – January 2025</a>
      </li>
      <li>
        <a href="#">Latest Intraday leverages – MIS & CO</a>
      </li>
    </ol>
  </div>
</div>
</section>

)
}

export default Hero
