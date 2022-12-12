import User from "../models/user";
import { setCookie, eraseCookie } from "../utils/cookie";

export const signin =
   (inputLogin, inputPassword, checkbox) => async (dispatch) => {
      let user = new User();
      user.login(inputLogin, inputPassword).then(() => {
         if (user.isLogged()) {
            dispatch({ type: "SIGNIN", token: user._token, error: false });
            sessionStorage.setItem("logged", true);
            sessionStorage.setItem("token", user._token);

            if (checkbox) {
               setCookie("logged", true, 30);
               setCookie("token", user._token, 30);
            }
         } else {
            dispatch({ type: "SIGNIN", token: null, error: true });
         }
      });
   };

export const signout = () => async (dispatch) => {
   eraseCookie("logged");
   eraseCookie("token");

   sessionStorage.removeItem("logged");
   sessionStorage.removeItem("token");
   dispatch({ type: "SIGNOUT" });
};

export const userProfile = (token) => async (dispatch) => {
   let user = new User();
   user.setToken(token);
   user
      .getProfile()
      .then(() => {
         if (user.isLogged()) {
            dispatch({
               type: "USER_PROFILE",
               id: user._id,
               email: user._email,
               firstName: user._firstName,
               lastName: user._lastName,
               createdAt: user._createdAt,
               updatedAt: user._updatedAt,
               error: false,
            });
         } else {
            dispatch({
               type: "USER_PROFILE",
               id: null,
               email: null,
               firstName: null,
               lastName: null,
               createdAt: null,
               updatedAt: null,
               error: true,
            });
         }
      })
      .catch((error) => {
         dispatch({
            type: "USER_PROFILE",
            id: null,
            email: null,
            firstName: null,
            lastName: null,
            createdAt: null,
            updatedAt: null,
            error: true,
         });
      });
};
