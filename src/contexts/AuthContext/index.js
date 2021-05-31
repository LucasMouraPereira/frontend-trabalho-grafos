import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import PropTypes from "prop-types";
import api from "services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadUserFromCookies = async () => {
      const token = Cookies.get("token");
      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        const { data: user } = await api.get("me");
        if (user) setUsers(user);
      }
      setLoading(false);
    };
    loadUserFromCookies();
  },[]);

  const login = async (email, password) => {
    const { data: token } = await api.post("sign_in", { email, password });
    if (token) {
      Cookies.set("token", token.token, { expires: 60 });
      api.defaults.headers.Authorization = `Bearer ${token.token}`;
      const { data: user } = await api.get("me");
      setUsers(user);
      router.push("/games/1");
    }
  };

  const logout = () => {
    Cookies.remove("token")
    setUsers(null)
    delete api.defaults.headers.Authorization
    router.push("/games/1");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!users, users, login, loading, logout, isOpenModal, setIsOpenModal }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
