import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Features() {
  return (
    <>
      <Header></Header>
      <div classNameName="App">
        <div className="container-fluid bg-light bg-icon my-5 py-6 onefit">
          <div className="container">
            <div
              className="section-header text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "500px" }}
            >
              <h1 className="display-5 mb-3">How it’s Work</h1>
              <p>
              The best  online at the comfort of your home!.
              </p>
            </div>
            <div className="row g-4">
         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
             <div className="bg-white text-center h-100 p-4 p-xl-5">
                 {/* <img className="img-fluid mb-4" src="img/icon-1.png" alt=""/> */}
                 <i class="fa fa-briefcase" aria-hidden="true"style={{fontSize:"58px"}}></i>
                 <h4 className="mb-3">Business Opportunity.</h4>
                 <p className="mb-4">We offered tailors a business opportunity to expand and thrive in a collaborative environment.</p>
                 <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="/service">Read More</a>
             </div>
         </div>
         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
             <div className="bg-white text-center h-100 p-4 p-xl-5">
                 {/* <img className="img-fluid mb-4" src="img/icon-2.png" alt=""/> */}
                 <i class="fa-solid fa-truck-fast" style={{fontSize:"58px"}}></i>
                 <h4 className="mb-3">Fast Delivery</h4>
                 <p className="mb-4">Our production house meticulously stitches your order, ensuring quality, and delivers it to your doorstep.</p>
                 <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="/service">Read More</a>
             </div>
         </div>
         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
             <div className="bg-white text-center h-100 p-4 p-xl-5">
                 {/* <img className="img-fluid mb-4" src="img/icon-3.png" alt=""/> */}
                 <i class="fa-solid fa-tag"  style={{fontSize:"58px"}}></i>
                 <h4 className="mb-3">Custom Stitching</h4>
                 <p className="mb-4">Custom stitching is popular for various types of clothing, including bridal wear, formal dresses</p>
                 <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="/service">Read More</a>
             </div>
         </div>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Features;
