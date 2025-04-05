import React, { createContext, useState, useContext } from "react";


const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Guest" });

  
  const updateUserName = (newName) => {
    setUser({ name: newName });
  };

  return (
    <UserContext.Provider value={{ user, updateUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
export default UserProvider;
