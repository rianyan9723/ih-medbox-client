import { createContext, useEffect, useState } from "react";
import { verify } from "../api";
import { useNavigate } from "react-router";


const UserContext = createContext();

function UserProviderWrapper({ children }) {
  const [loggedUser, setLoggedUser] = useState(null);
  const navigate = useNavigate();


  async function authenticateUser() {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      try {
        const response = await verify(storedToken);
        // console.log(responsse)

        setLoggedUser(response.data);
      } catch (e) {
        setLoggedUser(null);
      }
    } else {
      setLoggedUser(null);
    }
  }

  function logout() {
    localStorage.removeItem("authToken");
    authenticateUser();
    navigate("/")
  }

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        loggedUser,
        setLoggedUser,
        authenticateUser,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProviderWrapper, UserContext };
