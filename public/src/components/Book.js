import React, { useState, useEffect } from "react";
import Navbar from "./pages/Navbar";
import axios from "axios";
import moment from "moment";
import Footer from "./pages/Footer";
import Heading from "./pages/Heading";
import Booking_Image from "./images/booking.jpeg";
import { useNavigate } from "react-router-dom";

export default function Book() {
  const navigate = useNavigate();
  const [delux, setDelux] = useState([]);
  const [premier, setPremier] = useState([]);
  const [club, setClub] = useState([]);
  const [type, setType] = useState("");
  const [cin, setCIN] = useState("");
  const [cout, setCOUT] = useState("");
  const [rooms, setRooms] = useState("");
  const [bid, setBid] = useState(generateRandomFourDigitNumber());
  const currentDate = moment();
  const weekFromNow = moment().add(5, "days");
  const daysArray = [];

  const custid = localStorage.getItem("CID");

  const diffdate = (moment(cout) - moment(cin)) / (1000 * 60 * 60 * 24);

  function generateRandomFourDigitNumber() {
    const min = 1000;
    const max = 9999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const fetchDataForRoomType = async (roomType) => {
      try {
        const response = await axios.get(`http://localhost:8081/${roomType}`);
        return response.data;
      } catch (error) {
        console.error(`Error fetching room availability (${roomType}):`, error);
        return [];
      }
    };

    const updateRoomAvailability = async () => {
      const roomTypes = ["Delux", "Premier", "Club"];
      const dataPromises = roomTypes.map((roomType) =>
        fetchDataForRoomType(roomType)
      );

      try {
        const [deluxData, premierData, clubData] = await Promise.all(
          dataPromises
        );
        setDelux(deluxData);
        setPremier(premierData);
        setClub(clubData);
      } catch (error) {
        console.error("Error updating room availability:", error);
      }
    };

    updateRoomAvailability();
  }, []);

  while (currentDate.isSameOrBefore(weekFromNow, "day")) {
    daysArray.push(currentDate.format("MMM DD"));
    currentDate.add(1, "day");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!type || !cin || !cout || !rooms) {
      alert("Please fill in all required fields.");
      return;
    }

    axios
      .post("http://localhost:8081/roombooking", {
        type,
        cin,
        cout,
        rooms,
        diffdate,
        custid,
      })
      .then((res) => {
        if (res.data === 1) {
        } else {
          alert("Room booking failed");
        }
      })
      .catch((err) => console.error(err));

    axios
      .post("http://localhost:8081/customerbooking", {
        bid,
        currentDate,
        cin,
        cout,
        type,
        diffdate,
        custid,
        rooms,
      })
      .then((res) => {
        if (res.data === 1) {
          //alert("Customer booking successful");
          localStorage.setItem("bid", bid);
          navigate(`/paymentreceipt`);
        } else {
          alert("Customer booking failed");
        }
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="body cerapro vh-100">
      <Heading />
      <Navbar />
      <div className="bg-blue">
        <div className="container">
          <h4 className="text-light p-2" style={{ fontWeight: "bold" }}>
            {moment().format("MMMM DD, YYYY")}
          </h4>
          <div className="media-scroller text-white">
            {daysArray.map((date, index) => (
              <div key={index} className="border p-2 m-2">
                <div
                  className="bg-light-pink p-2 text-black text-bold"
                  style={{ fontWeight: "bold" }}
                >
                  {date}
                </div>
                <br />
                <div className="">
                  <div>
                    Delux: {30 - (delux[index] ? delux[index].roomCount : 0)}
                  </div>
                  <div>
                    Premier:{" "}
                    {20 - (premier[index] ? premier[index].roomCount : 0)}
                  </div>
                  <div>
                    Club: {10 - (club[index] ? club[index].roomCount : 0)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-xl-6 col-l-6 py-5">
              <div className="bg-white rounded p-2">
                <img
                  src={Booking_Image}
                  style={{ height: "100%", width: "100%" }}
                  alt="Booking"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-xl-6 col-l-6 py-5">
              <div className="bg-light-pink">
                <form className="p-5" onSubmit={handleSubmit}>
                  <div className="text-center">
                    <h1
                      style={{
                        fontWeight: "bold",
                        textDecoration: "double underline",
                      }}
                    >
                      Booking
                    </h1>
                  </div>
                  <div className="form-group p-2">
                    <label htmlFor="roomType">Room Type</label>
                    <select
                      className="form-control"
                      name="roomType"
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option>Choose Room Type</option>
                      <option value="Delux">Delux Room</option>
                      <option value="Premier">Premier Room</option>
                      <option value="Club">Club Room</option>
                    </select>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-l-6 col-sm-12 col-md-12">
                      <div className="form-group p-2">
                        <label htmlFor="cidate">Check-In</label>
                        <input
                          id="cidate"
                          type="date"
                          className="form-control"
                          name="cidate"
                          placeholder="Choose Check-In Date"
                          onChange={(e) => setCIN(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-l-6 col-sm-12 col-md-12">
                      <div className="form-group p-2">
                        <label htmlFor="codate">Check-Out</label>
                        <input
                          id="codate"
                          type="date"
                          className="form-control"
                          name="codate"
                          placeholder="Choose Check-Out Date"
                          onChange={(e) => setCOUT(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group p-2">
                    <label htmlFor="rooms">Number of Rooms</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Number of Rooms"
                      onChange={(e) => setRooms(e.target.value)}
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn-teal w-50 text-white">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
