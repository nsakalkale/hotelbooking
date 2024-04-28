import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./pages/Navbar";
import Heading from "./pages/Heading";
export default function User() {
  const navigate = useNavigate();
  const [login, setlogin] = useState(true);
  function log() {
    setlogin(true);
  }
  function siu() {
    setlogin(false);
  }
  useEffect(() => {
    if (localStorage.getItem("email")) {
      navigate("/");
    }
  }, []);

  return (
    <body className="bg-blue">
      <Heading />
      <Navbar />
      <br />
      <br />
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center">
          <div className="border border-2 shadow-sm rounded col-xl-6 col-sm-12">
            <div className="text-center border border-top-0 border-right-0 border-left-0 d-flex flex-row">
              <div
                className={`col p-2 border border-top-0 border-bottom-0 border-left-0 ${
                  login ? "bg-white shadow-sm" : "bg-light"
                }`}
                onClick={log}
              >
                Login
              </div>
              <div
                className={`col p-2 ${
                  !login ? "bg-white shadow-sm" : "bg-light"
                }`}
                onClick={siu}
              >
                Sign Up
              </div>
            </div>
            {login ? <Login /> : <SignUp />}
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </body>
  );
}
