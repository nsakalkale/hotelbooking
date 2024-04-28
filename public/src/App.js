import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Err from "./components/Err";
import Main from "./components/Main";
import User from "./components/User";
import Book from "./components/Book";
import PaymentReceipt from "./components/PaymentReceipt";
import "./components/css/font.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user" element={<User />} />
          <Route path="/book" element={<Book />} />
          <Route path="/paymentreceipt" element={<PaymentReceipt />} />
          <Route path="*" element={<Err />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
