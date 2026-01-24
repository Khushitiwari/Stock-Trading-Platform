
import React from "react";

function LeftSection({
  imgURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePLay,
  appStore,
}) {
  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-center">

        
        <div className="col-12 col-md-5 col-lg-4 text-center mb-4 mb-md-0">
          <img
            src={imgURL}
            alt={productName}
            className="img-fluid"
          />
        </div>

        {/* Spacer (only on large screens) */}
        <div className="d-none d-lg-block col-lg-1"></div>

       
        <div className="col-12 col-md-6 col-lg-5">
          <h1 className="mb-3">{productName}</h1>
          <p className="mb-4">{productDescription}</p>

          <div className="mb-4">
            <a href={tryDemo} className="me-4" style={{textDecoration:"none"}}>
              Try Demo
            </a>
            <a href={learnMore} style={{textDecoration:"none"}}>Learn More</a>
          </div>

          <div className="d-flex gap-3 flex-wrap">
            <a href={googlePLay}>
              <img
                src="/src/assets/goldenpiLogo.png"
                alt="Google Play"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="/src/assets/appstoreBadge.svg"
                alt="App Store"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;
