import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useMoralis } from "react-moralis";

function App() {

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    const login = async () => {
      
    }

    const logOut = async () => {
      
    }

    // Render Metamask authentication
  return (
    <div>
      <h1>Metamask Authentication with Moralis</h1>
    </div>
  );
}

export default App;