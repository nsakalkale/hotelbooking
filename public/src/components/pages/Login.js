import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:8081/login", { email, password })
      .then((res) => {
        if (res.data === "Login Failed") {
          Swal.fire({
            icon: "error",
            title: "Login Failed...",
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (res.data[0] && res.data[0].email !== "") {
          localStorage.setItem("email", res.data[0].email);
          localStorage.setItem("CID", res.data[0].id);
          navigate("/");
        }
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="p-5 bg-light-pink">
        <div className="text-center h1">Login</div>
        <br />
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
        </div>
        <div>
          <label>Password</label>
          <input
            className="form-control"
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <div className="text-center">
          <button type="submit" className="btn-teal">
            Log In
          </button>
        </div>
      </form>
    </>
  );
}
