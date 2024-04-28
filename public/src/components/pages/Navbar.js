import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../images/logo.svg";

export default function Navbar() {
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("email");
    navigate("/user");
  }
  return (
    <>
      <div className="shadow-sm bg-white p-3 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            onClick={() => navigate("/")}
            src={Logo}
            alt="Hotel Four Seasons Logo"
            className="mr-3 img-responsive"
            style={{ width: "8%", height: "100%" }}
          />
        </div>
        <div>
          <button
            onClick={() => navigate("/user")}
            className={`btn mx-2 ${email ? "visually-hidden" : ""}`}
          >
            Login
          </button>
          <button
            onClick={() => navigate("/user")}
            className={`btn mx-2 ${email ? "visually-hidden" : ""}`}
          >
            SignUp
          </button>

          <button
            onClick={logout}
            className={`btn mx-2 ${!email ? "visually-hidden" : ""}`}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
