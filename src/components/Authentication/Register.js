import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";
import NoteContext from "../../context/Notecontext";

const Register = () => {
  const navigate = useNavigate();
  const { fetchuserdata, setLoggedUser } = useContext(NoteContext);
  const [credentials, setCredentials] = React.useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    role: "",
    gender: "",
    address: "",
    phoneNo: "",
    dob: "",
  });
  const [errorArr, setErrorArr] = React.useState(false);
  const [errorArrMsg, setErrorArrMsg] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitLoginForm = async (e) => {
    e.preventDefault();
    setErrorArr(false);
    setErrorArrMsg([]);
    setError(false);
    setErrorMsg("");
    // console.log(credentials.cpassword +" " +credentials.password);
    if (credentials.cpassword !== credentials.password) {
      setError(true);
      setErrorMsg("Passwords did not match");
      return;
    }
    try {
      const res = await fetch("http://localhost:8080/user/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          role: credentials.role,
          gender: credentials.gender,
          dob: credentials.dob,
          phoneNo: credentials.phoneNo,
          address: credentials.address,
        }),
      });
      const json = await res.json();
      if (json.success) {
        localStorage.setItem("auth_token", json.token);
        fetchuserdata();
        navigate("/userDetails");
      } else {
        if (json.errorType == "array") {
          setErrorArr(true);
          setErrorArrMsg(json.error);
        } else if (json.errorType == "msg") {
          setError(true);
          setErrorMsg(json.error);
        }
        console.log(json.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section className={`${styles.wrapper} ${styles.regiWrapper}`}>
          <div className={styles.heading}>
            <h1 className={`${styles.text} ${styles.textLarge}`}>Sign Up</h1>
            <p className={`${styles.text} ${styles.textNormal}`}>
              Already a user?{" "}
              <span>
                <Link
                  to="/login"
                  className={`${styles.text} ${styles.textLinks}`}
                >
                  Sign in
                </Link>
              </span>
            </p>
          </div>
          <div className={styles.errorMsg}>
            {errorArr ? errorArrMsg[0].msg : error ? errorMsg : ""}
          </div>
          <form
            name="signin"
            className={styles.form}
            onSubmit={submitLoginForm}
          >
            <div className={styles.formWrapper}>
              {/* <div className={styles.errorMsg}>{error?errorMsg:""}</div> */}
              <div className={styles.inputControl}>
                <label htmlFor="name" className={styles.inputLabel}>
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={onChange}
                  id="name"
                  className={styles.inputField}
                  placeholder=""
                  value={credentials.name}
                />
              </div>
              <div className={styles.inputControl}>
                <label htmlFor="role" className={`${styles.inputLabel}`}>
                  Role
                </label>
                <div className={styles.radioBtnRow}>
                  <div className={`${styles.radioControl}`}>
                    <input
                      type="radio"
                      name="role"
                      value={"Student"}
                      onChange={onChange}
                      id="student"
                      className={styles.inputField}
                      placeholder="Student"
                    />
                    <label htmlFor="student" className={styles.radioLabel}>
                      Student
                    </label>
                  </div>
                  <div
                    className={`${styles.inputControl} ${styles.radioControl}`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={"Faculty"}
                      onChange={onChange}
                      id="faculty"
                      className={styles.inputField}
                      placeholder="Faculty"
                    />
                    <label htmlFor="faculty" className={styles.radioLabel}>
                      Faculty
                    </label>
                  </div>
                </div>
              </div>
              <div className={styles.inputControl}>
                <label htmlFor="email" className={styles.inputLabel}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={onChange}
                  id="email"
                  className={styles.inputField}
                  placeholder=""
                  value={credentials.email}
                />
              </div>
              <div className={styles.inputControl}>
                <label htmlFor="password" className={styles.inputLabel}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={onChange}
                  id="password"
                  className={styles.inputField}
                  placeholder=""
                  value={credentials.password}
                />
              </div>
              <div className={styles.inputControl}>
                <label htmlFor="Cpassword" className={styles.inputLabel}>
                  Re-Type Password
                </label>
                <input
                  type="password"
                  name="cpassword"
                  onChange={onChange}
                  id="Cpassword"
                  className={styles.inputField}
                  placeholder=""
                  value={credentials.cpassword}
                />
              </div>
            </div>
            <div className={styles.vr}></div>
            <div className={styles.formWrapper}>
              {/* <div className={styles.errorMsg}>{error?errorMsg:""}</div> */}
              <div className={styles.inputControl}>
                <label htmlFor="phone" className={styles.inputLabel}>
                  Phone number
                </label>
                <input
                  type="number"
                  name="phoneNo"
                  onChange={onChange}
                  id="phone"
                  className={styles.inputField}
                  placeholder=""
                  value={credentials.phoneNo}
                />
              </div>
              <div className={styles.inputControl}>
                <label htmlFor="role" className={`${styles.inputLabel}`}>
                  Gender
                </label>
                <div className={styles.radioBtnRow}>
                  <div className={`${styles.radioControl}`}>
                    <input
                      type="radio"
                      name="gender"
                      value={"Male"}
                      onChange={onChange}
                      id="male"
                      className={styles.inputField}
                      placeholder=""
                      //   value={credentials.gen}
                    />
                    <label htmlFor="male" className={styles.radioLabel}>
                      Male
                    </label>
                  </div>
                  <div
                    className={`${styles.inputControl} ${styles.radioControl}`}
                  >
                    <input
                      type="radio"
                      name="gender"
                      value={"Female"}
                      onChange={onChange}
                      id="female"
                      className={styles.inputField}
                      placeholder=""
                    />
                    <label htmlFor="femlae" className={styles.radioLabel}>
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className={styles.inputControl}>
                <label htmlFor="dob" className={styles.inputLabel}>
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  onChange={onChange}
                  id="dob"
                  className={styles.inputField}
                  placeholder=""
                  value={credentials.dob}
                />
              </div>
              <div className={styles.inputControl}>
                <label htmlFor="address" className={styles.inputLabel}>
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  onChange={onChange}
                  id="address"
                  className={styles.inputField}
                  placeholder=""
                  value={credentials.address}
                />
              </div>
              <div className={styles.inputControl}>
                {/* <a href="#" className={`${styles.text} ${styles.textLinks}`}>Forgot Password</a> */}
                <input
                  type="submit"
                  name="submit"
                  className={styles.inputSubmit}
                  value="Sign Up"
                />
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Register;
