import React, { Fragment, useEffect, useState } from "react";
import { Button } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function ServiceDetails() {
  const [serivce, setserivce] = useState({
    name: "",
    category: "",
    description: "",
    image: "null",
  });
  useEffect(() => {
    loadservice();
  }, []);
  const loadservice = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/users/ServicesDetails`,
        { credentials: "include" }
      );
      const data = await response.json();
      setserivce(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

 
    let list=(text)=>{
        let l=text.split(" ")
        return l.map((l)=>(<p className="card-text">{l}</p>))
        
    }
  


  return (
    <>
      <Fragment>
        <Header />
        <div className="container-xxl py-5">
          <div className="container1">
            <div
              className="text-center mx-auto wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxwidth: "500px" }}
            >
              <p className="fs-5 fw-bold  name">Our Services</p>
              <h1 className="display-5 mb-5">
              Clothes that make you smile
              </h1>
            </div>
            <div className="row g-4">
              <div
                className="container1"
                style={{
                  marginTop: "8%",
                  textAlign: "start",
                  fontFamily: "Raleway,fantasy",
                }}
              >
                <div className="row">
                  {Array.isArray(serivce) &&
                    serivce.map((serivce) => (
                      <div key={serivce._id} className="col-md-4 mb-4">
                        <div
                          className="card"
                          style={{
                            maxHeight: "600px",
                            objectFit: "cover",
                            width: "90%",
                          }}
                        >
                          <Link
                            to={`/serivce/${serivce._id}`}
                            style={{ textDecoration: "none" }}
                          >
                            {serivce.image && (
                              <div className="image-container">
                                <img
                                  src={serivce.image.url}
                                  className="card-img-top"
                                  alt="Serivce Image"
                                  style={{
                                    maxHeight: "200px",
                                    objectFit: "cover",
                                    cursor: "pointer",
                                    width: "100%",
                                    borderRadius: "8px 8px 0 0",
                                  }}
                                />
                                <div className="overlay">
                                  {/* <Link to={`/serivce/${serivce._id}`} className="view-details-btn">
                          View Details
                        </Link> */}
                                </div>
                              </div>
                            )}
                          </Link>
                          <div className="card-body">
                            <h5 className="card-title">{serivce.name}</h5>
                            {/* <h5 className="card-title">{serivce.category}</h5> */}
                            {list(serivce.description)}

                            <Link to="/dresscard/ladies">
                              {" "}
                              <Button intent="primary" className="explore"> Explore</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
      <Footer />
    </>
  );
}
export default ServiceDetails;
