import React from "react";
import Logo from "../images/logo.svg";

export default function Heading() {
  return (
    <>
      <div
        className="d-flex flex-column bg-light-pink"
        style={{ overflowX: "hidden" }}
      >
        <div className="d-flex flex-row align-items-center justify-content-center text-center p-3">
          <img
            src={Logo}
            alt="Hotel Four Seasons Logo"
            className="mr-3 img-fluid"
            style={{ width: "3%", height: "100%" }}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <h1 className="armatic display-2">Hotel Four Seasons</h1>
        </div>
      </div>
    </>
  );
}
