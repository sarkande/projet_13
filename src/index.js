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
import User from "./pages/User";

const logged = store.getState().signin.logged;

console.log("logged: ", logged);
console.log(typeof logged);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   //<React.StrictMode>
   <Provider store={store}>
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={logged === false ? <Home /> : <User />} />
            <Route
               path="/signin"
               element={logged === false ? <SignIn /> : <User />}
            />
            <Route
               path="/user"
               element={logged === true ? <User /> : <Home />}
            />
            <Route path="*" element={<h1>404: Not Found</h1>} />
         </Routes>
         <Footer />
      </Router>
   </Provider>
   //</React.StrictMode>
);
