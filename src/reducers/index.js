import signinReducer from "./signinReducer";
import userProfileReducer from "./userProfileReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
   signin: signinReducer,
   userProfile: userProfileReducer,
});

export default allReducers;
