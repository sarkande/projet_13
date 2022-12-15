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
         <div className="edit-window-header">
            <h2 className="edit-window-title">Edit Name</h2>
         </div>
         <div className="edit-window-content">
            <form className="edit-window-form">
               <div className="edit-window-form-group">
                  <label className="edit-window-form-label" htmlFor="firstName">
                     First Name
                  </label>
                  <input
                     className="edit-window-form-input"
                     type="text"
                     id="firstName"
                     defaultValue={_firstName}
                  />
               </div>
               <div className="edit-window-form-group">
                  <label className="edit-window-form-label" htmlFor="lastName">
                     Last Name
                  </label>
                  <input
                     className="edit-window-form-input"
                     type="text"
                     id="lastName"
                     defaultValue={_lastName}
                  />
               </div>
               <div className="edit-window-form-group">
                  <button
                     className="edit-window-form-group__button-save"
                     onClick={handleSave}
                  >
                     Save
                  </button>
                  <button
                     className="edit-window-form-group__close-button"
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
