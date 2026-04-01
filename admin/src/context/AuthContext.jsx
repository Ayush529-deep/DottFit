
// import axios from "axios";
// import { createContext, useContext, useState, useEffect } from "react";
// import { BASE_URL } from "../config";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     // INITIAL LOAD (prevents flicker on refresh)
//     try {
//       const saved = localStorage.getItem("adminUser");
//       return saved && saved !== "undefined" ? JSON.parse(saved) : null;
//     } catch (err) {
//       console.error("LOCAL STORAGE PARSE ERROR:", err);
//       localStorage.removeItem("adminUser");
//       return null;
//     }
//   });

//   // ************* LOGIN *************
//   const login = async ({ email, password }) => {
//     try {
//       const res = await axios.post(`${BASE_URL}/auth/login`, {
//         email,
//         password,
//       });

//       if (res.data?.success && res.data?.user) {
//         setUser(res.data.user);
//         localStorage.setItem("adminUser", JSON.stringify(res.data.user));
//       }

//       return res.data;
//     } catch (err) {
//       console.log("Login Error:", err);
//       return {
//         success: false,
//         message: err.response?.data?.message || "Server error",
//       };
//     }
//   };

//   // ************* LOGOUT *************
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("adminUser");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [authLoading, setAuthLoading] = useState(true); // ✅ ADD THIS

  // Load auth from storage on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("dottfit_user");
    const storedToken = localStorage.getItem("dottfit_token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }

    setAuthLoading(false); // ✅ VERY IMPORTANT
  }, []);

  // LOGIN
  const login = async (credentials) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, credentials);

      if (res.data?.success) {
        setUser(res.data.user);
        setToken(res.data.token);

        localStorage.setItem(
          "dottfit_user",
          JSON.stringify(res.data.user)
        );
        localStorage.setItem("dottfit_token", res.data.token);

        return { success: true, user: res.data.user };
      }

      return { success: false, error: "Invalid credentials" };
    } catch (err) {
      return {
        success: false,
        error: err.response?.data?.error || "Login failed",
      };
    }
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("dottfit_user");
    localStorage.removeItem("dottfit_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, authLoading }} // ✅ EXPORT IT
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
