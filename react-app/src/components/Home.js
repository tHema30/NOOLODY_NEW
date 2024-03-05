import React from "react";
import {Link} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

function Home() {
    return (
        <>
      <Header></Header>
      <div>
        <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
            {/* Section 1 start */}
         {/* <div id="header-carousel" className="carousel slide" data-bs-ride="carousel"> */}
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={require("../assets/img/homenew01.jpg")} alt=""/>
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-lg-7 home-content">
                                    <h1 className="display-2 mb-5 animated slideInDown">We Stitch Design <br/>FIT YOU PERFECTLY</h1>
                                    <a href="./service" onClick={myFunction} className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
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
                    <p className="mb-4"> Tailor Near Me – Let Us Stitch!
We understand how important authentic clothing with intricate details is for our clients. Our online tailor will carefully listen to all your amazing ideas and tailor outfits that meet all your expectations. Whether it’s traditional wear, casual wear, or formal wear, our online tailoring for will be a blissful experience for you. Choosing NOOLODY tailor shop near me service is the best choice, as we provide #DoorStep service.</p>
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
         <h1 className="display-5 mb-3">How it’s Work</h1>
         <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
     </div>
     <div className="row g-4">
         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
             <div className="bg-white text-center h-100 p-4 p-xl-5">
                 {/* <img className="img-fluid mb-4" src="img/icon-1.png" alt=""/> */}
                 <i class="fa-solid fa-house"style={{fontSize:"58px"}}></i>
                 <h4 className="mb-3">Home Delivery</h4>
                 <p className="mb-4">We provide doorstep service that means, we’ll come at your place to take measurement and collect your cloth/fabric as per your given time and date.</p>
                 <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="/service">Read More</a>
             </div>
         </div>
         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
             <div className="bg-white text-center h-100 p-4 p-xl-5">
                 {/* <img className="img-fluid mb-4" src="img/icon-2.png" alt=""/> */}
                 <i class="fa-solid fa-truck-fast" style={{fontSize:"58px"}}></i>
                 <h4 className="mb-3">Fast Delivery</h4>
                 <p className="mb-4">Post which the stitching happens at our Production House and then we get it delivered to you and if there will be any alteration required, We will redo again and redeliver it at your place.</p>
                 <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="/service">Read More</a>
             </div>
         </div>
         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
             <div className="bg-white text-center h-100 p-4 p-xl-5">
                 {/* <img className="img-fluid mb-4" src="img/icon-3.png" alt=""/> */}
                 <i class="fa-solid fa-tag"  style={{fontSize:"58px"}}></i>
                 <h4 className="mb-3">Custom Stitching</h4>
                 <p className="mb-4">We have a team of experienced tailors and designers, all outfit will be stitched under experts guidance.Our online tailors for ladies will curate excellent outfits for your formal events.

</p>
                 <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="/service">Read More</a>
             </div>
         </div>
     </div>
 </div>
</div>
<section class="section6">
  <p style={{"padding-top": "30px;"}}>Here this is yours</p>
  <h2>Best Tailors for</h2>
  {/* <hr class="line"/> */}
  <div class="row">
    <div className="col-lg-6">

  <img src={require('../assets/img/tailorregis.avif')} alt="logo" className="saw"  />
  </div>
  <div className="col-lg-6 mt-5">
    <p>Tailor Near Me – Let Us Stitch!
       We understand how important authentic clothing with intricate details is for our clients. Our online tailor will carefully listen to all your amazing ideas and tailor outfits that meet all your expectations. Whether it’s traditional wear, casual wear, or formal wear, our online tailoring for will be a blissful experience for you. Choosing NOOLODY tailor shop near me service is the best choice, as we provide #DoorStep service</p>
<Link to='/tailorregister'>
<button className="tailorreg">Register Now</button></Link>
  </div>

   </div>
</section>

 
     
<Footer/>
</div>
 </>
    );
  }

function myFunction() {
    // Your code here
   
} 

  
  export default Home
