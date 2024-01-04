import styles from "../styles/Register.module.css";

const Register = () => {
  return (
    <div>
      <form className={styles.form}>
        <div className={styles.group}>
          <input
            type="text"
            name="name"
            placeholder="Имя пользователя"
            className={styles.input}
            autoComplete="off"
            required
          />
        </div>
        <div className={styles.group}>
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            className={styles.input}
            autoComplete="off"
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Регистрация
        </button>
      </form>
    </div>
  );
};

export default Register;
