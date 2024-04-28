import React from "react";
import { useNavigate, Link } from "react-router-dom";
import C1 from "../../images/1_carousel.jpg";
import C2 from "../../images/2_carousel.jpg";
import C3 from "../../images/3_carousel.jpg";
export default function Carousel() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-blue p-4 cerapro overflow-hidden">
        <div className="row">
          <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
            <div className="bg-white rounded" style={{ height: "100%" }}>
              <div
                id="carouselExampleCaptions"
                className="carousel slide p-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={C1}
                      className="d-block w-100  img-fluid"
                      alt="..."
                      style={{ height: "100%" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={C2}
                      className="d-block w-100  img-fluid"
                      alt="..."
                      style={{ height: "100%" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={C3}
                      className="d-block w-100  img-fluid"
                      alt="..."
                      style={{ height: "100%" }}
                    />
                  </div>
                </div>
                <button
                  style={{ color: "black" }}
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  style={{ color: "black" }}
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 p-3">
            <div
              className="text-center text-white h3 m-2"
              style={{ fontWeight: "bold", textDecoration: "double underline" }}
            >
              "Discover Your Perfect Getaway"
            </div>
            <br />
            <div className="text-white display5">
              Welcome to Hotel Four Seasons, your gateway to luxury in
              Bengaluru. Experience memorable getaways, romantic escapes, family
              adventures, and relaxing business stays. Explore our exquisite
              rooms, savor culinary delights, and rejuvenate in our spa and
              fitness center. Your dream getaway awaits. Book now for an
              unforgettable experience.
            </div>
            <br />
            <div className="text-center justify-content-center">
              <button
                onClick={() => navigate("/book")}
                className="m-1 btn-beige w-50"
                style={{ fontWeight: "bold" }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
