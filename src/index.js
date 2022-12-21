import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";

import "./styles/index.css";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import SignOut from "./pages/SignOut";

import { eraseCookie, getCookie } from "./utils/cookie";

if (getCookie("logged") === "true" && getCookie("token") !== "") {
   sessionStorage.setItem("logged", getCookie("logged"));
   sessionStorage.setItem("token", getCookie("token"));
} else {
   eraseCookie("logged");
   eraseCookie("token");
}

if (sessionStorage.getItem("logged") === "true") {
   store.dispatch({
      type: "SIGNIN",
      error: false,
      logged: true,
      token: sessionStorage.getItem("token"),
   });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   //<React.StrictMode>
   <Provider store={store}>
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signout" element={<SignOut />} />
            <Route path="*" element={<h1>404: Not Found</h1>} />
         </Routes>
         <Footer />
      </Router>
   </Provider>
   //</React.StrictMode>
);
