import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const login = (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      localStorage.setItem("user", JSON.stringify(savedUser));
      setUser(savedUser);
      return true;
    }

    return false;
  };

  const signup = (name, email, password) => {
    const newUser = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "registeredUser",
      JSON.stringify(newUser)
    );

    localStorage.setItem(
      "user",
      JSON.stringify(newUser)
    );

    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}