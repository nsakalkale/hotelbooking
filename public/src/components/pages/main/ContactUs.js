import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="bg-blue cerapro p-2 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-l-6 col-sm-12 col-md-12 p-5">
            <div
              className="h2 text-white"
              style={{ textDecoration: "double underline", fontWeight: "bold" }}
            >
              Contact Us
            </div>
            <br />
            <div className="text-white">
              <div>
                Hotel Four Seasons Bangalore
                <br />
                123 Luxury Lane,
                <br />
                Bengaluru, India
              </div>
              <br />
              <div className="text-wrap">
                <b
                  class="h4 font-weight-400"
                  style={{ textDecoration: "double underline", fontWeight: "bold" }}
                >
                  Queries
                </b>
                <br />
                <br />
                <p>Phone : +91-9876543210</p>
                <p className="text-break">
                  Email : queries@hotelfourseasons.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-l-6 col-sm-12 col-md-12 overflow-hidden">
            <div className="bg-white p-2 m-2 rounded">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497506.35520648985!2d77.39942402062722!3d13.05040870419739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16773125c81f%3A0xc672addd71b0266a!2sFour%20Seasons%20Hotel%20Bengaluru%20at%20Embassy%20ONE!5e0!3m2!1sen!2sin!4v1697907296854!5m2!1sen!2sin"
                allowFullScreen
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
