import { createContext, useContext, useState } from "react";
import { LogInService, SignUpService } from "../Service";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const localStorageToken = JSON.parse(localStorage.getItem("loginItems"));
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);
  const [token, setToken] = useState(localStorageToken?.token);


  // SIGN UP HANDLER:

  const signUpHandler = async (email, password, firstName, lastName) => {
    try {
      const {
        status,
        data: { createdUser, encodedToken },
      } = await SignUpService({ email, password, firstName, lastName });
      if (status == 200 || status == 201) {
        localStorage.setItem(
          "loginItems",
          JSON.stringify({ user: createdUser, token: encodedToken })
        );
        setCurrentUser(createdUser);
        setToken(encodedToken);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //   LOG IN HANDLER:

  const logInHandler = async (email, password) => {
    try {
      const {
        data: { foundUser, encodedToken },
        status,
      } = await LogInService({ email, password });
      if (status == 200 || status == 201) {
        localStorage.setItem(
          "loginItems",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        setCurrentUser(foundUser);
        setToken(encodedToken);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //   LOG OUT HANDLER:

  const logOutHandler = () => {
    localStorage.removeItem("loginItems");
    setCurrentUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, token, signUpHandler, logInHandler, logOutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { useAuth, AuthProvider };
