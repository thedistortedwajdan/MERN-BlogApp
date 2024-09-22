import { Children, createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  try {
    const [user, setuser] = useState(
      JSON.parse(localStorage.getItem("user") || null)
    );
    const login = async (inputs) => {
      const res = await axios.post("/api/auth/login", inputs);
      setuser(res.data);
    };
    const logout = async () => {
      await axios.post("/api/auth/logout");
      setuser(null);
    };
    useEffect(() => {
      localStorage.setItem("user", JSON.stringify(user));
    }, [user]);
    return (
      <AuthContext.Provider
        value={{
          user,
          login,
          logout,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  } catch (error) {
    console.log(error.message);
  }
};
