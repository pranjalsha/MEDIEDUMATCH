import React, { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {

    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const [isLogged, setIsLogged] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, isLogged, setIsLogged }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
