import React from "react";
import { Link } from "react-router-dom";
import error from "./images/error.gif";
import "./css/font.css";
function Err() {
  return (
    <html>
      <body>
        <div className="container-fluid">
          <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <div className="bg-white">
              <img className="img-fluid" src={error} />
            </div>
            <div className="text-center bricolage">
              <h4 classname="display-6">
                The page your are looking for is not available
              </h4>
            </div>
            <br />
            <div className="align-center">
              <Link to="../">
                <button className="btn btn-secondary">
                  <text className="bricolage">Go to Home Page</text>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Err;
