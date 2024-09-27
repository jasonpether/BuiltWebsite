import './App.css';
import React, { useState } from 'react';
import HomePage from './routes/HomePage';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './routes/LoginPage';
import NavigationBar from './routes/NavigationBar';
import SignUpTest from './routes/SignUpTest';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false); 

  return (
    <Routes>
 
      <Route path='/' element={<NavigationBar isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />}>
       
        <Route index element={<HomePage isSignedIn={isSignedIn} />} />
        <Route path='/login' element={<LoginPage setIsSignedIn={setIsSignedIn} />} />
        <Route path='/signup' element={<SignUpTest />} />
      </Route>
    </Routes>
  );
}

export default App;
