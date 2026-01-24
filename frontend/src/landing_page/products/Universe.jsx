
import React from "react";

function Universe() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center text-center">

        {/* Heading */}
        <div className="col-12 mb-4">
          <h1>The Zerodha Universe</h1>
          <p className="text-muted fw-bold">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        {/* Card : to make it responsive and scalable*/}
        {[
          { img: "/src/assets/smallcaseLogo.png", desc: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs." },
          { img: "/src/assets/streakLogo.png" , desc : "Systematic trading platform that allows you to create and backtest strategies without coding"},
          { img: "/src/assets/sensibullLogo.svg" , desc :"Options trading platform that lets youcreate strategies, analyze positions, and examine data points like open interest, FII/DII, and more."},
          { img: "/src/assets/zerodhaFundhouse.png", desc: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs." },
          { img: "/src/assets/goldenpiLogo.png", desc :"As a SEBI-registered debt broker & OBPP (Online Bond Providing Platform), trust and transparency are at the heart of what we do." },
          { img: "/src/assets/dittoLogo.png", desc :"Personalized advice on life and health insurance. No spam and no mis-selling." },
        ].map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-4 mb-5">

            {/* Logo Box */}
            <div
              className="d-flex justify-content-center align-items-center mb-3"
              style={{ height: "80px" }}
            >
              <img
                src={item.img}
                alt=""
                className="img-fluid"
                style={{ maxHeight: "60px" }}
              />
            </div>

            {item.desc && (
              <p className="text-muted small">{item.desc}</p>
            )}
          </div>
        ))}

        {/* Button */}
        <div className="col-12">
          <button className="btn btn-primary fs-5 px-4">
            Sign Up now
          </button>
        </div>

      </div>
    </div>
  );
}

export default Universe;
