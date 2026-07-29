import React from "react";

function Education() {
  return (
    <section className="pt-section pt-section-alt">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center">
            <img
              src="/src/assets/education.svg"
              alt="Pulse Academy"
              className="img-fluid"
              style={{ maxWidth: "400px" }}
            />
          </div>
          <div className="col-lg-6">
            <span className="pt-product-tag">Free education</span>
            <h2 className="mb-3">Learn before you leap</h2>
            <p className="text-muted">
              Pulse Academy offers comprehensive courses from market basics to
              advanced options strategies — completely free, forever.
            </p>
            <a href="#" className="d-inline-block mb-4 text-decoration-none fw-semibold">
              Explore Pulse Academy →
            </a>
            <p className="text-muted mt-4">
              Join Pulse Community — our active forum where traders share
              insights, ask questions, and grow together.
            </p>
            <a href="#" className="text-decoration-none fw-semibold">
              Join the community →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
