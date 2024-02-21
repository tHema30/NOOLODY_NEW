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
</div>
<Footer/>
</>
    );
  }
  
  export default Features;
  
  