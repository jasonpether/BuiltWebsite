import InputBox from "../InputBox";
import React, { useState } from 'react';
import Buttont from "../Buttont"; // Ensure correct component name
import './LoginPage.css';
import { Link, useNavigate } from "react-router-dom";
import { signInWithGooglePopup, createUserDocFromAuth } from '../utils/firebase';
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const LoginPage = ({ setIsSignedIn }) => {
  const navigate = useNavigate();
  const auth = getAuth();

  const [contact, setContact] = useState({
    username: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((preValue) => ({
      ...preValue,
      [name]: value
    }));
  };

  const handleLogin = async () => {
    const { username, password } = contact;
    try {
      await signInWithEmailAndPassword(auth, username, password);
      setIsSignedIn(true);
      navigate('/');

    } catch (error) {
      console.error('Error signing in with email and password:', error.message);
      alert('Login failed: ' + error.message); 
    }
  };

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocFromAuth(user);
      setIsSignedIn(true);
      navigate('/');
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
      alert('Google login failed: ' + error.message); 
    }
  };

  return (
    <div className="Page">
      <h2>Enter your Login Details</h2>
      <InputBox
        title="Enter your Email"
        type="text"
        value={contact.username}
        onChange={handleChange}
        name="username"
      />

      <InputBox
        title="Enter your Password"
        type="password"
        value={contact.password}
        onChange={handleChange}
        name="password"
      />

      <br />
      <button onClick={handleLogin}>
        Login
      </button>

      <p>Or sign up using the button below!</p>

      <Link to="/signup">
        <Buttont title="Sign up!" /> 
      </Link>

      <br />
      <button onClick={logGoogleUser}>
        Log in with Google
      </button>
    </div>
  );
}

export default LoginPage;
