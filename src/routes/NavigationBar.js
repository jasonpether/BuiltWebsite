import Header from '../Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

function NavigationBar({ isSignedIn, setIsSignedIn }) {
  return (
    <div>
      <Header
        title="DEV@DEAKIN"
        placeholder="Search..."
        button1="Post"
        button2={isSignedIn ? "Log Out" : "Login"}  
        setIsSignedIn={setIsSignedIn}  
      />
      <Outlet />
    </div>
  );
}

export default NavigationBar;
