import React from "react";
import C1 from "../../../images/delux/1.jpg";
import C2 from "../../../images/delux/2.jpg";
import C3 from "../../../images/delux/3.jpg";
export default function Delux() {
  return (
    <>
      <div className="poppins overflow-hidden">
        <div className="col-12">
          <div className="bg-white p-1 rounded m-2" style={{ height: "100%" }}>
            <div id="delux" className="carousel slide" data-bs-ride="carousel">
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
                data-bs-target="#delux"
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
                data-bs-target="#delux"
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
                Delux Room
              </div>
              <br />
              <ul>
                <li>
                  <strong>Bed:</strong> King/Twin Bed
                </li>
                <li>
                  <strong>View:</strong> City/Garden View
                </li>
                <li>
                  <strong>Size:</strong> 350-400 sq ft
                </li>
                <li>
                  <strong>Occupancy:</strong> Sleeps 2 adults + 1 child
                </li>
                <li>
                  <strong>Amenities:</strong> Wi-Fi, TV, mini-bar
                </li>
                <li>
                  <strong>Bathroom:</strong> Private bath with tub/shower and
                  toiletries
                </li>
                <li>
                  <strong>Services:</strong> Room service
                </li>
                <li>
                  <strong>Extras:</strong> Optional spa access
                </li>
                <br />
                <br />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
