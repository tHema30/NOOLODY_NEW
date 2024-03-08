import React from "react";
import Header from "./Header";
import Footer from "./Footer";



function About() {
    return (
        <>
        <Header></Header>
      <div>
      <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="about-img position-relative overflow-hidden p-5 pe-0">
                        <img className="img-fluid w-100" src={require("../assets/img/images.jpeg")} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 className="display-5 mb-4">Tailor Near Me – Let Us Stitch! </h1>
                    <p className="mb-4">We understand how important authentic clothing with intricate details is for our clients. Our online tailor will carefully listen to all your amazing ideas and tailor outfits that meet all your expectations.  Choosing NOOLODY tailor shop near me service is the best choice, as we provide #DoorStep service.</p>
                    <p><i className="fa fa-check  me-3"></i>Tempor erat elitr rebum at clita</p>
                    <p><i className="fa fa-check  me-3"></i>Aliqu diam amet diam et eos</p>
                    <p><i className="fa fa-check  me-3"></i>Clita duo justo magna dolore erat amet</p>
                    {/* <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="1">Read More</a> */}
                </div>
            </div>
        </div>
    </div>
 </div>
<Footer/>
</>
    );
  }
  
  export default About;
  
  



















