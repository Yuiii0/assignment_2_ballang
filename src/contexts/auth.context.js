import { useNavigate } from "react-router-dom";

const { createContext, useState, useContext } = require("react");
const initialValue = {
  isLoggedIn: false,
  signIn: () => {},
  logOut: () => {},
};
const AuthContext = createContext(initialValue);

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const signIn = () => {
    setIsLoggedIn(true);
    navigate("/");
  };
  const logOut = () => {
    setIsLoggedIn(false);
    navigate("/sign-in");
  };
  const value = {
    isLoggedIn,
    signIn,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
