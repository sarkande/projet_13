import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signout } from "../actions";

function SignOut() {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(signout());

      navigate("/");
   }, [navigate, dispatch]);

   return <p>Disconnected !</p>;
}

export default SignOut;
