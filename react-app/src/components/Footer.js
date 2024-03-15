function Footer() {
  return (
    <div>
      <div
        className="container-fluid bg-dark footer mt-3 pt-3 wow fadeIn" 
        data-wow-delay="0.1s footer"
      >
        <div className="container6">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h1 className="fw-bold text-primary mb-4">
                <span className="text-secondary">NOOLODY</span>
              </h1>
              <p>
                For a better user experience, we offer free pick-up and delivery
                services.
              </p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-1"
                  href="1"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-1"
                  href="1"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-1"
                  href="1"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-0"
                  href="1"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Address</h4>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>123 Street, jaffna
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i> 345 67890
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>Noolodyofficial@gmail.com
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              <a className="btn btn-link" href="/about">
                About Us
              </a>
              <a className="btn btn-link" href="/contact">
                Contact Us
              </a>
              <a className="btn btn-link" href="/service">
                Our Services
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Newsletter</h4>
              <p>
                Design your own Beautiful dress and home essentials with just
                one click
              </p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                {/* <a
                  href="/signup"  style={{marginLeft:'197px'}}
                  className="btn btn-primary"
                >
                  SignUp
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid ">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 footer">
                &copy; <a href="/home">NOOLODY</a>, All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                Designed By <a href="./home">Hema</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
