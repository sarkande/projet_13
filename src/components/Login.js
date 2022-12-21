import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Login() {
   const logged = useSelector((state) => state.signin);
   const userName = useSelector((state) => state.userProfile);

   return !logged.logged ? (
      <div>
         <Link to="/signin" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
         </Link>
      </div>
   ) : (
      <div>
         <Link className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {userName._firstName}
         </Link>
         <Link to="/signout" className="main-nav-item">
            <i className="fa fa-sign-in"></i>
            Sign Out
         </Link>
      </div>
   );
}
