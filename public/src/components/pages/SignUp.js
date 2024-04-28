import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phoneno, setPhone] = useState();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:8081/signup", {
        fname,
        lname,
        phoneno,
        email,
        password,
      })
      .then((res) => {
        if (res.data === 1) {
          alert("Inserted Successfully");
          localStorage.setItem("email", res.data[0].email);
          navigate("/");
        } else {
          alert(res.data);
        }
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="p-5 bg-light-pink">
          <div className="text-center h1">Sign Up</div>
          <br />
          <div className="form-group">
            <label className="">First Name</label>
            <input
              className="form-control"
              name="fName"
              placeholder="First Name"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label className="">Last Name</label>
            <input
              className="form-control"
              name="lName"
              placeholder="Last Name"
              onChange={(e) => setLname(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label className="">Phone Number</label>
            <input
              className="form-control"
              name="phoneno"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label className="">Email</label>
            <input
              className="form-control"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
          </div>
          <div className="form-group">
            <label className="">Password</label>
            <input
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="text-center">
            <button className="btn-teal">Sign Up</button>
          </div>
        </div>
      </form>
    </>
  );
}
