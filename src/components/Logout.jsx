import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Logout.module.css";
const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    localStorage.removeItem("access_token");
    navigate("/");
  };

  return (
    <button onClick={handleLogout} className={styles.logout}>
      Exit
    </button>
  );
};

export default Logout;
