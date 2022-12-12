import { Link } from "react-router-dom";
import logo_argentBank from "../assets/img/argentBankLogo.png";
import Login from "./Login";

function Header() {
   return (
      <nav className="main-nav">
         <Link className="main-nav-logo" to="/">
            <img
               className="main-nav-logo-image"
               src={logo_argentBank}
               alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
         </Link>
         <Login />
      </nav>
   );
}

export default Header;
