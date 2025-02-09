import React, { useEffect } from "react";
import "../css/logout.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    logout();
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [logout, navigate]);


  return null;
};

export default Logout;
