import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  // Check if the user is already logged in (e.g., token stored in localStorage)
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role');

    if (storedToken && storedRole) {
      setToken(storedToken);
      setRole(storedRole);
    }
  }, []);

  // Login function to set the token and role
  const login = (token, role) => {
    setToken(token);
    setRole(role);

    // Store the token and role in localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  };

  // Logout function to clear the token and role
  const logout = () => {
    setToken(null);
    setRole(null);

    // Remove the token and role from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  };

  // Provide the token, role, login, and logout functions to the components
  return (
    <AuthContext.Provider value={{ token, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
