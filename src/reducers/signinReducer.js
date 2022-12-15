const SIGNIN_STATE_DEFAULT = {
   error: false,
   token: null,
   logged: false,
};

const signinReducer = (state = SIGNIN_STATE_DEFAULT, action) => {
   switch (action.type) {
      case "SIGNIN":
         return {
            ...state,
            error: action.error,
            token: action.token,
            logged:
               action.token !== null &&
               action.token !== undefined &&
               action.token !== "" &&
               action.error === false
                  ? true
                  : false,
         };
      case "SIGNOUT":
         return {
            error: false,
            token: null,
            logged: false,
         };
      default:
         return state;
   }
};

export default signinReducer;
