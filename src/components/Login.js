import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Login() {
   const logged = useSelector((state) => state.signin);

   return !logged.logged ? (
      <div>
         <Link to="/signin" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
         </Link>
      </div>
   ) : (
      <div>
         <Link to="/signout" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign Out
         </Link>
      </div>
   );
}
