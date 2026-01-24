
import React from "react";

function RightSection({
  imgUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-center">

        
        <div className="col-12 col-md-6 col-lg-5 mb-4 mb-md-0">
          <h1 className="mb-3">{productName}</h1>
          <p className="mb-4">{productDescription}</p>

          <a href={learnMore} style={{textDecoration:"none"}} className="ms-lg-4">
            Learn More
          </a>
        </div>

        {/* Spacer (only on laptop) */}
        <div className="d-none d-lg-block col-lg-1"></div>

       
        <div className="col-12 col-md-5 col-lg-4 text-center">
          <img
            src={imgUrl}
            alt={productName}
            className="img-fluid"
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;
