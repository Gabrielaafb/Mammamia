import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);  

  
  const login = async (email, password) => {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      setToken(data.token);  
      setEmail(data.email);  
    } else {
      console.error('Login failed');
    }
  };

 
  const register = async (email, password) => {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      setToken(data.token);  
      setEmail(data.email);  
    } else {
      console.error('Register failed');
    }
  };

  const logout = () => {
    setToken(null);  
    setEmail(null);  
  };

  
  const getProfile = async () => {
    const response = await fetch('http://localhost:5000/api/auth/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,  
      },
    });
    const data = await response.json();
    if (response.ok) {
      return data;  
    } else {
      console.error('Failed to fetch profile');
    }
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};

