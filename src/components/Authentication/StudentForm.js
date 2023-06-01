import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const StudentForm = ({ studentDetails, onChangeStudent,onSubmitForm, error }) => {
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
      <form name="signin" className={styles.form} onSubmit={onSubmitForm}>
        <div className={styles.formWrapper}>
          {/* <div className={styles.errorMsg}>{error?errorMsg:""}</div> */}
          <div className={styles.inputControl}>
            <label htmlFor="id" className={styles.inputLabel}>
              Student Id
            </label>
            <input
              type="number"
              name="id"
              onChange={onChangeStudent}
              id="id"
              className={styles.inputField}
              placeholder=""
              value={studentDetails.id}
            />
          </div>
          <div className={styles.inputControl}>
            <label htmlFor="degree" className={styles.inputLabel}>
              Degree
            </label>
            <input
              type="text"
              name="degree"
              onChange={onChangeStudent}
              id="degree"
              className={styles.inputField}
              placeholder=""
              value={studentDetails.degree}
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
            <label htmlFor="discipline" className={styles.inputLabel}>
              Discipline
            </label>
            <input
              type="text"
              name="discipline"
              onChange={onChangeStudent}
              id="discipline"
              className={styles.inputField}
              placeholder=""
              value={studentDetails.discipline}
            />
          </div>
          <div className={styles.inputControl}>
            <label htmlFor="father" className={styles.inputLabel}>
              Father's Name
            </label>
            <input
              type="text"
              name="fatherName"
              onChange={onChangeStudent}
              id="father"
              className={styles.inputField}
              placeholder=""
              value={studentDetails.fatherName}
            />
          </div>
          <div className={styles.inputControl}>
            <label htmlFor="mother" className={styles.inputLabel}>
              Mother's Name
            </label>
            <input
              type="text"
              name="motherName"
              onChange={onChangeStudent}
              id="mother"
              className={styles.inputField}
              placeholder=""
              value={studentDetails.motherName}
            />
          </div>
        </div>
        <div className={styles.vr}></div>
        <div className={styles.formWrapper}>
          {/* <div className={styles.errorMsg}>{error?errorMsg:""}</div> */}
          <div className={styles.inputControl}>
            <label htmlFor="parentPhone" className={styles.inputLabel}>
              Parent phone number
            </label>
            <input
              type="number"
              name="parentPhone"
              onChange={onChangeStudent}
              id="parentPhone"
              className={styles.inputField}
              placeholder=""
              value={studentDetails.parentPhone}
            />
          </div>
          <div className={styles.inputControl}>
            <label htmlFor="parentEmail" className={`${styles.inputLabel}`}>
              Parent Email
            </label>
            <input
              type="email"
              name="parentEmail"
              onChange={onChangeStudent}
              id="male"
              className={styles.inputField}
              placeholder=""
              value={studentDetails.parentEmail}
            />
          </div>
          <div className={styles.inputControl}>
            <label htmlFor="advisorId" className={styles.inputLabel}>
              Advisor Id
            </label>
            <input
              type="text"
              name="FacultyId"
              onChange={onChangeStudent}
              id="advisorId"
              className={styles.inputField}
              placeholder=""
              value={studentDetails.FacultyId}
            />
          </div>
          <div className={styles.inputControl}>
            <label htmlFor="hostel" className={styles.inputLabel}>
              Hostel name
            </label>
            <input
              type="text"
              name="hostel"
              onChange={onChangeStudent}
              id="hostel"
              className={styles.inputField}
              placeholder=""
              value={studentDetails.hostel}
            />
          </div>
          <div className={styles.inputControl}>
            <label htmlFor="roomNo" className={styles.inputLabel}>
              Room No.
            </label>
            <input
              type="text"
              name="roomNo"
              onChange={onChangeStudent}
              id="roomNo"
              className={styles.inputField}
              placeholder=""
              value={studentDetails.roomNo}
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

export default StudentForm;
