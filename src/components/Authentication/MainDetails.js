import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css"

const MainDetails = ({userData,onSubmitUser,onChangeUser,error}) => {
  return (
    <section className={`${styles.wrapper} ${styles.regiWrapper}`}>
      <div className={styles.heading}>
        <h1 className={`${styles.text} ${styles.textLarge}`}>Sign Up</h1>
        <p className={`${styles.text} ${styles.textNormal}`}>
          Already a user?{" "}
          <span>
            <Link to="/login" className={`${styles.text} ${styles.textLinks}`}>
              Sign in
            </Link>
          </span>
        </p>
      </div>
      <div className={styles.errorMsg}>
        {error.errArr ? error.errArrMsg[0].msg : error.err ? error.errMsg : ""}
      </div>
      <form name="signin" className={styles.form} onSubmit={onSubmitUser}>
        <div className={styles.formWrapper}>
          {/* <div className={styles.errorMsg}>{error?errorMsg:""}</div> */}
          <div className={styles.inputControl}>
            <label htmlFor="name" className={styles.inputLabel}>
              Full name
            </label>
            <input
              type="text"
              name="name"
              onChange={onChangeUser}
              id="name"
              className={styles.inputField}
              placeholder=""
              value={userData.name}
            />
          </div>
          {/* <div className={styles.inputControl}>
            <label htmlFor="role" className={`${styles.inputLabel}`}>
              Role
            </label>
            <div className={styles.radioBtnRow}>
              <div className={`${styles.radioControl}`}>
                <input
                  type="radio"
                  name="role"
                  value={"Student"}
                  onChange={onChangeUser}
                  id="student"
                  className={styles.inputField}
                  placeholder="Student"
                />
                <label htmlFor="student" className={styles.radioLabel}>
                  Student
                </label>
              </div>
              <div className={`${styles.inputControl} ${styles.radioControl}`}>
                <input
                  type="radio"
                  name="role"
                  value={"Faculty"}
                  onChange={onChangeUser}
                  id="faculty"
                  className={styles.inputField}
                  placeholder="Faculty"
                />
                <label htmlFor="faculty" className={styles.radioLabel}>
                  Faculty
                </label>
              </div>
            </div>
          </div> */}
          <div className={styles.inputControl}>
            <label htmlFor="email" className={styles.inputLabel}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              onChange={onChangeUser}
              id="email"
              className={styles.inputField}
              placeholder=""
              value={userData.email}
            />
          </div>
          <div className={styles.inputControl}>
            <label htmlFor="password" className={styles.inputLabel}>
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={onChangeUser}
              id="password"
              className={styles.inputField}
              placeholder=""
              value={userData.password}
            />
          </div>
          <div className={styles.inputControl}>
            <label htmlFor="Cpassword" className={styles.inputLabel}>
              Re-Type Password
            </label>
            <input
              type="password"
              name="cpassword"
              onChange={onChangeUser}
              id="Cpassword"
              className={styles.inputField}
              placeholder=""
              value={userData.cpassword}
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
              onChange={onChangeUser}
              id="phone"
              className={styles.inputField}
              placeholder=""
              value={userData.phoneNo}
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
                  onChange={onChangeUser}
                  id="male"
                  className={styles.inputField}
                  placeholder=""
                  //   value={userData.gen}
                />
                <label htmlFor="male" className={styles.radioLabel}>
                  Male
                </label>
              </div>
              <div className={`${styles.inputControl} ${styles.radioControl}`}>
                <input
                  type="radio"
                  name="gender"
                  value={"Female"}
                  onChange={onChangeUser}
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
              onChange={onChangeUser}
              id="dob"
              className={styles.inputField}
              placeholder=""
              value={userData.dob}
            />
          </div>
          <div className={styles.inputControl}>
            <label htmlFor="address" className={styles.inputLabel}>
              Address
            </label>
            <input
              type="text"
              name="address"
              onChange={onChangeUser}
              id="address"
              className={styles.inputField}
              placeholder=""
              value={userData.address}
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
  );
};

export default MainDetails;
