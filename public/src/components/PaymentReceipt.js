import React, { useState, useEffect, useRef } from "react";
import Heading from "./pages/Heading";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PaymentReceipt() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [bid, setBID] = useState();
  useEffect(() => {
    setBID(localStorage.getItem("bid"));
    axios
      .post("http://localhost:8081/paymentdata", { bid: bid })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: " + error);
      });
  }, [bid]);

  const pdfRef = useRef(null);

  function generatePdf() {
    const pdf = new jsPDF("p", "mm", "a4");

    html2canvas(pdfRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 10, 10, 190, 250);
      pdf.save(`PaymentReceipt_${bid}.pdf`);
    });
  }

  function Home() {
    navigate("/");
  }

  function Print() {
    window.print();
  }

  return (
    <div className="body cerapro">
      <Heading />
      <Navbar />
      <div className="bg-blue">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div
              id="div"
              ref={pdfRef}
              className="col-xl-7 col-lg-7 col-sm-12 col-md-12 my-5 bg-light-pink p-2 rounded"
            >
              <div className="bg-light rounded p-3">
                <div className="text-center">
                  <h3 style={{ fontWeight: "900" }}>HOTEL FOUR SEASONS</h3>
                  <h6 className="text-muted">Contact No. : 9876598078</h6>
                </div>
                <hr />
                <div className="p-4 bg-white rounded">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 py-2">
                      Booking Id : {data.booking_id}
                    </div>
                    <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 py-2">
                      Booking Date : {data.bdatenew}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 py-2">
                      Name : {data.fname + " " + data.lname}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 py-2">
                      Phone No. : {data.phoneno}
                    </div>
                    <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 py-2">
                      Email : {data.email}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 py-2">
                      No. of Rooms : {data.noofrooms}
                    </div>
                    <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 py-2">
                      Room Type : {data.type}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 py-2">
                      Duration of Stay :{" "}
                      {data.noofdays +
                        " Nights " +
                        (data.noofdays - 1) +
                        " Days"}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 py-2">
                      Check-In Date : {data.cindatenew}
                    </div>
                    <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 py-2">
                      Check-Out Date : {data.coutdatenew}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 py-2">
                      Amount : {data.amt}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-6">
              <div className="row p-2">
                <div className="col-xl-4 col-lg-4 col-sm-12 col-md-12 text-center">
                  <button onClick={Home} className="btn-beige">
                    Home
                  </button>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-12 col-md-12 text-center">
                  <button onClick={Print} className="btn-beige">
                    Print
                  </button>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-12 col-md-12 text-center">
                  <button onClick={generatePdf} className="btn-beige">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
