import React, { useState } from "react";
import Select from "react-select";
import styles from "./Login.module.css";

const StudentForm = ({
  studentDetails,
  setStudentDetails,
  onChangeStudent,
  onSubmitForm,
  setStepOne,
  email
}) => {
  const [branch, setBranch] = useState();
  const [degree, setDegree] = useState();
  const branches = [
    { value: "Information technology", label: "Information technology" },
    { value: "Computer engineering", label: "Computer engineering" },
    { value: "Electrical engineering", label: "Electrical engineering" },
    { value: "Mechanical engineering", label: "Mechanical engineering" },
    { value: "Civil engineering", label: "Civil engineering" },
    {
      value: "Electronics and Communication engineering",
      label: "Electroncics and Communication engineering",
    },
    {
      value: "Industrial and Production engineering",
      label: "Industrial and Production engineering",
    },
    { value: "Agriculture engineering", label: "Agriculture engineering" },
  ];

  const degrees = [
    { value: "Bachelor of technology", label: "Bachelor of technology" },
    { value: "Master of technology", label: "Master of technology" },
    { value: "MCA", label: "MCA" },
    { value: "Ph.D", label: "Ph.D" },
  ];
  const handleBranch = (branch) => {
    setBranch(branch);
    setStudentDetails({ ...studentDetails, discipline: branch.value });
  };
  const handleDegree = (degree) => {
    setDegree(degree);
    setStudentDetails({ ...studentDetails, degree: degree.value });
  };
  return (
    
      <form name="signin" className={styles.form} onSubmit={onSubmitForm}>
        <div className={styles.formWrapper}>
          {/* <div className={styles.errorMsg}>{error?errorMsg:""}</div> */}
          <div className={styles.inputControl}>
            <label htmlFor="email" className={styles.inputLabel}>
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={onChangeStudent}
              id="email"
              className={styles.inputField}
              placeholder=""
              value={email}
              disabled={true}
            />
          </div>
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
            <Select
              options={degrees}
              value={degree}
              onChange={handleDegree}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "rgb(221, 239, 255)",
                  border: "none",
                  borderRadius: "2rem",
                  padding: ".4rem 1rem",
                }),
              }}
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
            <Select
              options={branches}
              onChange={handleBranch}
              value={branch}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "rgb(221, 239, 255)",
                  border: "none",
                  borderRadius: "2rem",
                  padding: ".4rem 1rem",
                }),
              }}
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
          <div className={styles.inputControl}>
            {/* <a href="#" className={`${styles.text} ${styles.textLinks}`}>Forgot Password</a> */}
            <input
              type="button"
              className={styles.inputSubmit}
              value="Previous"
              onClick={()=>setStepOne(false)}
            />
          </div>
        </div>

        <div className={styles.formWrapper}>
          {/* <div className={styles.errorMsg}>{error?errorMsg:""}</div> */}
          <div className={styles.inputControl}>
            <label htmlFor="Batch" className={styles.inputLabel}>
              Batch
            </label>
            <input
              type="number"
              name="batch"
              onChange={onChangeStudent}
              id="batch"
              className={styles.inputField}
              placeholder=""
              value={studentDetails.batch}
            />
          </div>
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
              type="number"
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
  );
};

export default StudentForm;
