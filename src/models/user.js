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

      this.__id = null;
      this._email = null;
      this._password = null;
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
               console.log(response.data);
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
      await UserAPI.getProfile(this._token)
         .then((response) => {
            if (response.status === 200) {
               console.log(response.data);
               console.log(response.data.body);

               this.__id = response.data.body._id;
               this._email = response.data.body.email;
               this._password = response.data.body.password;
               this._firstName = response.data.body.firstname;
               this._lastName = response.data.body.lastname;
               this._createdAt = response.data.body.createdAt;
               this._updatedAt = response.data.body.updatedAt;

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
}

export default User;
