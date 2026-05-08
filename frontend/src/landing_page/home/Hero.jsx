
import React from "react";

function Hero() {
  return (
    <div className="container my-5 hero-animate">
      <div className="row text-center justify-content-center">

        
        <div className="col-12 mb-4 animate-delay-1">
          <img
            src="/src/assets/homeHero.png"
            alt="hero"
            className="img-fluid "
          />
        </div>

        
        <div className="col-12 col-md-10 col-lg-8">
          <h1 className="mt-4 animate-delay-2">
            Invest in everything
          </h1>

          <p className="text-muted mt-3 animate-delay-3">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          <button className="btn btn-primary fs-5 px-4 py-2 mt-3 mb-5 animate-delay-4">
            Sign up for free
          </button>
        </div>

      </div>
    </div>
  );
}

export default Hero;
