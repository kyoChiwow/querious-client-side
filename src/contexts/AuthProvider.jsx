import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.init";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register User here
  const createUserEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Register User here

  // Update User here
  const updateUser = (userUpdatedData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, userUpdatedData);
  };
  // Update User here

  // Login Email User here
  const loginUserEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Login Email User here

  // Login Google User here
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // Login Google User here

  // User Logout here 
  const userLogOut = () => {
    return signOut(auth);
  }
  // User Logout here 

  //   Setting up an observer here
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email) {
        const user = { email: currentUser.email };

        axios.post("http://localhost:5000/jwt", user, {
          withCredentials: true,
        })
        .then(res => {
          setLoading(false)
        })
      }

      else {
        axios.post("http://localhost:5000/logout", {}, {
          withCredentials: true,
        })
        .then(res => {
          setLoading(false)
        })
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  //   Setting up an observer here

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUserEmail,
    updateUser,
    loginUserEmail,
    googleLogin,
    userLogOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
