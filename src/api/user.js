import axios from "axios";

class UserAPI {
   /**
    * Description
    * @param {{"email": "string","password": "string"}} json
    * @returns {{"token": "string"}}
    */
   static getUser(json) {
      return axios
         .create({
            baseURL: process.env.REACT_APP_BASE_URL + "/user",
         })
         .post("/login", json);
   }

   /**
    * Description
    * @param {{"email": "string","password": "string"}} json
    * @returns {{"token": "string"}}
    */
   static createUser(json) {
      return axios
         .create({
            baseURL: process.env.REACT_APP_BASE_URL + "/user",
         })
         .post("/signup", json);
   }

   /**
    * Description
    * @param {{"email": "string","password": "string"}} json
    * @returns {{"token": "string"}}
    */
   static getProfile(token) {
      return axios
         .create({
            baseURL: process.env.REACT_APP_BASE_URL + "/user",
            headers: { Authorization: "Bearer " + token },
         })
         .post("/profile");
   }

   /**
    * Description
    * @param {{"email": "string","password": "string"}} json
    * @returns {{"token": "string"}}
    */
   static updateProfile(token, firstName, lastName) {
      return axios
         .create({
            baseURL: process.env.REACT_APP_BASE_URL + "/user",
            headers: { Authorization: "Bearer " + token },
         })
         .put("/profile", { firstname: firstName, lastname: lastName });
   }
}

export default UserAPI;
