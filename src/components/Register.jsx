import styles from "../styles/Register.module.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./configAxios";

const Register = () => {
  const navigate = useNavigate;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://chat-online-kjxa.onrender.com/register",
        {
          username,
          password,
        }
      );

      if (response.status === 200) {
        navigate("/login");
        setRegistrationSuccess(true);
      }
    } catch (error) {
      console.error("eror registration", error);
      setErrorMessage("Ошибка при регистрации,пожалуйста попробуйте ещё");
    }
  };
  return (
    <div>
      <h1 className={styles.heading}>
        <img
          src="https://i.imgur.com/XcdwWvj.png"
          width="120px"
          height="10px"
        />
      </h1>
      <form className={styles.form} onSubmit={handleRegistration}>
        <div className={styles.group}>
          <input
            type="text"
            placeholder="Имя пользователя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
            autoComplete="off"
            required
          />
        </div>
        <div className={styles.group}>
          <input
            type="password"
            placeholder="Пароль"
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Регистрация
        </button>
        <Link to={"/"}>
          <button className={styles.button}>Назад</button>
        </Link>
      </form>
      {registrationSuccess && <p>Регистрация успешна!</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default Register;
