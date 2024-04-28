import React from "react";
import C1 from "../../../images/club/1.jpg";
import C2 from "../../../images/club/2.jpg";
export default function Club() {
  return (
    <>
      <div className="poppins overflow-hidden">
        <div className="col-12">
          <div className="bg-white rounded p-1 m-2" style={{ height: "100%" }}>
            <div id="club" className="carousel slide" data-bs-ride="carousel">
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
              </div>
              <button
                style={{ color: "black" }}
                className="carousel-control-prev"
                type="button"
                data-bs-target="#club"
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
                data-bs-target="#club"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <hr />
            <div className="content bg-blue text-white p-2 rounded">
              <div
                className="text-center h5"
                style={{
                  fontWeight: "bold",
                  textDecoration: "double underline",
                }}
              >
                Club Room
              </div>
              <br />
              <ul>
                <li>
                  <strong>Bed:</strong> King Bed
                </li>
                <li>
                  <strong>View:</strong> City/Sea View
                </li>
                <li>
                  <strong>Size:</strong> 500-600 sq ft
                </li>
                <li>
                  <strong>Occupancy:</strong> Suitable for 2 adults
                </li>
                <li>
                  <strong>Amenities:</strong> Wi-Fi, TV, mini-bar
                </li>
                <li>
                  <strong>Bathroom:</strong> Private bath with tub and premium
                  toiletries
                </li>
                <li>
                  <strong>Services:</strong> 24-hour room service, daily
                  housekeeping
                </li>
                <li>
                  <strong>Extras:</strong> Access to spa, breakfast included,
                  late check-out option
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
