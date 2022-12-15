import { useSelector, useDispatch } from "react-redux";
import { userProfile } from "../actions";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EditWindow from "../components/EditWindow";

function User() {
   const [editWindow, setEditWindow] = useState(false);

   const logged = useSelector((state) => state.signin);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const user = useSelector((state) => state.userProfile);

   if (!user.error)
      if (user._id === null) {
         dispatch(userProfile(logged.token));
      }

   function handleClickEditButton() {
      setEditWindow(!editWindow);
   }

   useEffect(() => {
      if (user.error) navigate("/signout");
      else if (!logged.logged) {
         navigate("/signin");
      }
   }, [logged.logged, navigate, user.error, dispatch]);

   return !logged.logged ? (
      <p>Disconnected</p>
   ) : (
      <main className="main bg-dark">
         <div className="header">
            <h1>
               Welcome back
               <br />
               {user._firstName} {user._lastName}!
            </h1>
            <button className="edit-button" onClick={handleClickEditButton}>
               Edit Name
            </button>
         </div>
         {editWindow ? (
            <EditWindow
               handleClick={handleClickEditButton}
               lastName={user._lastName}
               firstName={user._firstName}
            />
         ) : null}

         <h2 className="sr-only">Accounts</h2>
         <section className="account">
            <div className="account-content-wrapper">
               <h3 className="account-title">Argent Bank Checking (x8349)</h3>
               <p className="account-amount">$2,082.79</p>
               <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
               <button className="transaction-button">View transactions</button>
            </div>
         </section>
         <section className="account">
            <div className="account-content-wrapper">
               <h3 className="account-title">Argent Bank Savings (x6712)</h3>
               <p className="account-amount">$10,928.42</p>
               <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
               <button className="transaction-button">View transactions</button>
            </div>
         </section>
         <section className="account">
            <div className="account-content-wrapper">
               <h3 className="account-title">
                  Argent Bank Credit Card (x8349)
               </h3>
               <p className="account-amount">$184.30</p>
               <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
               <button className="transaction-button">View transactions</button>
            </div>
         </section>
      </main>
   );
}

export default User;
