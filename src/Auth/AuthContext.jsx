import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../LocalStorage/LocalStorage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [employe, setEmploye] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { employe, admin } = getLocalStorage();
    setEmploye(employe);
    setAdmin(admin);

    // Restore logged-in user from session
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
    
    setLoading(false);
  }, []);

  const login = (userData) => {
    localStorage.setItem('loggedInUser', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        employe, 
        admin, 
        setUser,
        setEmploye,
        setAdmin,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider; 
