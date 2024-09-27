import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

function Header({ title, placeholder, button1, button2, setIsSignedIn }) {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);  
      setIsSignedIn(false); 
      navigate('/');   
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="header">
      <div className="title">
        <h1>{title}</h1>
      </div>

      <div className='search'>
        <Input placeholder={placeholder} />
      </div>

      <div className="buttons">
        <Button>{button1}</Button>

        {button2 === "Log Out" ? (
          <Button onClick={handleSignOut}>Log Out</Button> 
        ) : (
          <Link to="/login">
            <Button>{button2}</Button>  
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
