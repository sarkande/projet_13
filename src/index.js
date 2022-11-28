import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/index.css";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import User from "./pages/User";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   //<React.StrictMode>
   <Router>
      <Header />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/signin" element={<SignIn />} />
         <Route path="/user" element={<User />} />
         <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
      <Footer />
   </Router>
   //</React.StrictMode>
);
