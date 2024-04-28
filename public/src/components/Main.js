import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Heading from "./pages/Heading";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Carousel from "./pages/main/Carousel";
import RoomType from "./pages/main/RoomType";
import ContactUs from "./pages/main/ContactUs";

function Main() {
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("email")) {
      navigate("/user");
    }
  }, []);
  return (
    <div className="body cerapro">
      <Heading />
      <Navbar />
      <Carousel />
      <RoomType />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Main;
