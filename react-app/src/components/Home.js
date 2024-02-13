import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
    return (
        <>
      <Header></Header>
      <div>
        <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
            {/* Section 1 start */}
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={require("../assets/img/homenew01.jpg")} alt=""/>
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-lg-7 home-content">
                                    <h1 className="display-2 mb-5 animated slideInDown">We Stitch Design <br/>FIT YOU PERFECTLY</h1>
                                    <a href="./formbook" onClick={myFunction} className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src={require("../assets/img/homenewhema02.png")} alt=""/>
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-lg-7 home-content">
                                    <h1 className="display-2 mb-5 animated slideInDown">Best and Realiable Tailoring service</h1>
                                    <a href="./tailorregister"  onClick={myFunction}  className="btn btn-primary rounded-pill py-sm-3 px-sm-5">Register Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        {/* section 2 start  */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="about-img position-relative overflow-hidden p-5 pe-0">
                        <img className="img-fluid w-100" src={require("../assets/img/images.jpeg")} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 className="display-5 mb-4">Best Tailoring Services</h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p><i className="fa fa-check  me-3"></i>Tempor erat elitr rebum at clita</p>
                    <p><i className="fa fa-check  me-3"></i>Aliqu diam amet diam et eos</p>
                    <p><i className="fa fa-check  me-3"></i>Clita duo justo magna dolore erat amet</p>
                    <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="1">Read More</a>
                </div>
            </div>
        </div>
    </div>
 </div>
 <div className="container-fluid bg-light bg-icon my-5 py-6 onefit">
 <div className="container">
     <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
         <h1 className="display-5 mb-3">Our Features</h1>
         <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
     </div>
     <div className="row g-4">
         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
             <div className="bg-white text-center h-100 p-4 p-xl-5">
                 <img className="img-fluid mb-4" src="img/icon-1.png" alt=""/>
                 <h4 className="mb-3">Home Delivery</h4>
                 <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                 <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="1">Read More</a>
             </div>
         </div>
         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
             <div className="bg-white text-center h-100 p-4 p-xl-5">
                 <img className="img-fluid mb-4" src="img/icon-2.png" alt=""/>
                 <h4 className="mb-3">Altering</h4>
                 <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                 <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="1">Read More</a>
             </div>
         </div>
         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
             <div className="bg-white text-center h-100 p-4 p-xl-5">
                 <img className="img-fluid mb-4" src="img/icon-3.png" alt=""/>
                 <h4 className="mb-3">Custom Stitching</h4>
                 <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                 <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="1">Read More</a>
             </div>
         </div>
     </div>
 </div>
</div>
<section class="section6">
  <p style={{"padding-top": "30px;"}}>Here this is yours</p>
  <h2>Best designs Upload</h2>
  <hr class="line"/>
  <div class="grid-container2">
    
   </div>
</section>

 
      <div className="container-xxl py-5">
        <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                <h1 className="display-5 mb-3">Latest Blog</h1>
                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <img className="img-fluid" src={require("../assets/img/pexels-suzy-hazelwood-1266139.jpg")} alt=""/>
                    <div className="bg-light p-4">
                        <a className="d-block h5 lh-base mb-4" href="1">How hghjkgjhg jgkhlvvhj ggkuhohgif hjgjkhlhlhlkhkk</a>
                        <div className="text-muted border-top pt-4">
                            <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Admin</small>
                            <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <img className="img-fluid" src={require("../assets/img/pexels-suzy-hazelwood-1266139.jpg")} alt=""/>
                    <div className="bg-light p-4">
                        <a className="d-block h5 lh-base mb-4" href="1">this it odftm yjodstn rhiogd jkklj</a>
                        <div className="text-muted border-top pt-4">
                            <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Admin</small>
                            <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <img className="img-fluid" src={require("../assets/img/pexels-suzy-hazelwood-1266139.jpg")} alt=""/>
                    <div className="bg-light p-4">
                        <a className="d-block h5 lh-base mb-4" href="1">ffhjfkjgk;h;igbhjchgcghvkj hvhjf;gydytfjuhiuftuf</a>
                        <div className="text-muted border-top pt-4">
                            <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Admin</small>
                            <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
<Footer/>

 </>
    );
  }

function myFunction() {
    // Your code here
   
} 

  
  export default Home
