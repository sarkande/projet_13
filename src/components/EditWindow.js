import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../actions";

export default function EditWindow({ handleClick }) {
   const logged = useSelector((state) => state.signin);
   const { _firstName, _lastName } = useSelector((state) => state.userProfile);

   const dispatch = useDispatch();

   function handleSave(e) {
      e.preventDefault();
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      console.log(_firstName, _lastName);
      dispatch(updateUserProfile(logged.token, firstName, lastName));
      handleClick();
   }

   return (
      <div className="edit-window">
         <div className="edit-window-content">
            <form className="edit-window-form">
               <input
                  className="edit-window-form-input"
                  type="text"
                  id="firstName"
                  placeholder={_firstName}
               />

               <input
                  className="edit-window-form-input"
                  type="text"
                  id="lastName"
                  placeholder={_lastName}
               />

               <div className="edit-window-form-group">
                  <button
                     className="edit-window-form-group__button-save button-edit "
                     onClick={handleSave}
                  >
                     Save
                  </button>
                  <button
                     className="edit-window-form-group__close-button button-edit "
                     onClick={(e) => handleClick()}
                  >
                     Cancel
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}
