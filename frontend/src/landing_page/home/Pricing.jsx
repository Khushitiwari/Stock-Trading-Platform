
import React from "react";

function Pricing() {
  return (
    <div className="container my-5 ">
      <div className="row justify-content-center align-items-center ">

        {/* Left Content */}
        <div className="col-12 col-md-6 col-lg-5 mb-4 mb-md-0">
          <h1 className="mb-3 fs-2 mt-5">Unbeatable Pricing</h1>

          <p className="mb-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="" className="text-decoration-none">
            See Pricing →
          </a>
        </div>

        {/* Spacer (only on large screens) */}
        <div className="d-none d-lg-block col-lg-1"></div>

        {/* Pricing Cards */}
        <div className="col-12 col-md-6 col-lg-5 mt-5">
          <div className="row text-center g-3">

            <div className="col-12 col-sm-6">
              <div className="border p-4 h-100">
                <h1 className="mb-3">₹0</h1>
                <p className="mb-0">
                  Free equity delivery and direct mutual funds
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 ">
              <div className="border p-4 h-100">
                <h1 className="mb-3">₹20</h1>
                <p className="mb-0">Intraday and F&O</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
