import User from "../models/user";

export const signin = (inputLogin, inputPassword) => async (dispatch) => {
   let user = new User();
   user.login(inputLogin, inputPassword).then(() => {
      console.log(user.isLogged());
      if (user.isLogged()) {
         dispatch({ type: "SIGNIN", token: user._token, error: false });
      } else {
         dispatch({ type: "SIGNIN", token: null, error: true });
      }
   });
};

export const profile = () => {};
