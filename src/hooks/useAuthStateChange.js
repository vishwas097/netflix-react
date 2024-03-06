import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { createUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";

const useAuthStateChange = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(
          createUser({
            uid: uid,
            email: email,
          })
        );
        window.location.pathname === "/" && navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
};

export default useAuthStateChange;
