import UserAPI from "../api/user";

class User {
   /*
    

638241b6f11be37efce6becd

"steve@rogers.com"

"$2b$12$49D4dl7cq9ol45avyX5o1.509XhH7cIWcb/104GfaWp/rsm6u5mh."

"Steve"

"Rogers"

2022-11-26T16:41:26.104+00:00

2022-11-26T16:41:26.104+00:00
    */

   constructor() {
      this._token = null;

      this._id = null;
      this._email = null;
      this._firstName = null;
      this._lastName = null;
      this._createdAt = null;
      this._updatedAt = null;

      this._logged = false;
   }

   async login(mail, pass) {
      await UserAPI.getUser({ email: mail, password: pass })
         .then((response) => {
            if (response.status === 200) {
               this._logged = true;
               this._token = response.data.body.token;
               // ->create User and pass it to redux
               // ->code error to redux
            } else {
               // ->code error to redux
            }
         })
         .catch((error) => {
            // ->code error to redux
            console.log(error);
         });
   }

   async getProfile() {
      await UserAPI.getProfile(this._token).then((response) => {
         if (response.status === 200) {
            this._id = response.data.body.id;
            this._email = response.data.body.email;
            this._firstName = response.data.body.firstName;
            this._lastName = response.data.body.lastName;
            this._createdAt = response.data.body.createdAt;
            this._updatedAt = response.data.body.updatedAt;
         }
      });
   }

   async updateProfile(firstName, lastName) {
      await UserAPI.getProfile(this._token, firstName, lastName)
         .then((response) => {
            if (response.status === 200) {
               console.log(response.data);
               // ->create User and pass it to redux
               // ->code error to redux
            } else {
               // ->code error to redux
            }
         })
         .catch((error) => {
            // ->code error to redux
         });
   }

   isLogged() {
      return this._logged;
   }

   setToken(token) {
      this._token = token;
      this._logged =
         this._token !== null && this._token !== undefined && this._token !== ""
            ? true
            : false;
   }
}

export default User;
