import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signin } from "../actions";

function SignIn() {
   const inputLogin = useRef(null);
   const inputPassword = useRef(null);
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const logged = useSelector((state) => state.signin);

   const [checkbox, setCheckbox] = useState(false);

   function handleSubmit(e) {
      e.preventDefault();
      dispatch(
         signin(inputLogin.current.value, inputPassword.current.value, checkbox)
      );
   }
   function handleChange(e) {
      setCheckbox(e.target.checked);
   }
   useEffect(() => {
      if (logged.logged) {
         navigate("/user");
      }
   }, [navigate, logged, checkbox]);

   return logged.logged ? (
      <p>already logged</p>
   ) : (
      <main className="main bg-dark">
         <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            {logged.error ? (
               <p className="error-login">Erreur de connexion</p>
            ) : null}
            <form>
               <div className="input-wrapper">
                  <label htmlFor="username">Username</label>
                  <input
                     type="text"
                     id="username"
                     ref={inputLogin}
                     autoComplete="username"
                  />
               </div>
               <div className="input-wrapper">
                  <label htmlFor="password">Password</label>
                  <input
                     type="password"
                     id="password"
                     ref={inputPassword}
                     autoComplete="current-password"
                  />
               </div>
               <div className="input-remember">
                  <input
                     type="checkbox"
                     id="remember-me"
                     onChange={handleChange}
                  />
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
