import React from "react";
import {  Link } from "react-router-dom";
import styles from "./Login.module.css";

const Register = () => {

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link className={styles.registerBtn} to={"/studentRegister"} >Register as Student</Link>
        <Link className={styles.registerBtn} to={"/facultyRegister"} >Register as Faculty</Link>
      </div>
    </main>
  );
};

export default Register;
