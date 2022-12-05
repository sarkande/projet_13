import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signin } from "../actions";

import User from "../models/user";

function SignIn() {
   const inputLogin = useRef(null);
   const inputPassword = useRef(null);
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const [error, setError] = useState(false);

   const logged = useSelector((state) => state.signin);
   console.log("logged: ", logged);

   function handleSubmit(e) {
      e.preventDefault();
      console.log("submit");
      console.log(inputLogin.current.value);
      console.log();

      dispatch(signin(inputLogin.current.value, inputPassword.current.value));
      // let user = new User();
      // user
      //    .login(inputLogin.current.value, inputPassword.current.value)
      //    .then(() => {
      //       console.log(user.isLogged());
      //       if (user.isLogged()) {
      //          setError(false);
      //          sessionStorage.setItem("token", user._token);
      //          sessionStorage.setItem("logged", user._logged);

      //          user.getProfile(user._token).then(() => {
      //             sessionStorage.setItem("user", JSON.stringify(user));
      //             navigate("/user");
      //          });
      //          //navigate("/user");
      //       } else {
      //          console.log("not logged");
      //          setError(true);
      //       }
      //    });
   }
   useEffect(() => {
      if (logged.logged) {
         navigate("/user");
      }
   }, [logged.logged, navigate]);
   return (
      <main className="main bg-dark">
         <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In {logged.toString()}</h1>
            {logged.error ? (
               <p className="error-login">Erreur de connexion</p>
            ) : null}
            <form>
               <div className="input-wrapper">
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" ref={inputLogin} />
               </div>
               <div className="input-wrapper">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" ref={inputPassword} />
               </div>
               <div className="input-remember">
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Remember me</label>
               </div>
               <button className="sign-in-button" onClick={handleSubmit}>
                  Sign In
               </button>
            </form>
         </section>
      </main>
   );
}

export default SignIn;
