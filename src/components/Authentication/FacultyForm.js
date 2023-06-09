import React from "react";
import styles from "./Login.module.css";
import { department, designation } from "../MiscComp/OptionsList";
import arrowDown from "../../Images/icons8-expand-arrow-50.png";

const FacultyForm = ({
  facultyDetails,
  onSubmitForm,
  setFacultyDetails,
  setStepOne,
  email
}) => {
  const [activeDep, setActiveDep] = React.useState(false);
  const [activeDes, setActiveDes] = React.useState(false);

  const selectHandleDep = (value) => {
    setFacultyDetails({ ...facultyDetails, department: value });
    setActiveDep(false);
  };
  const selectHandleDes = (value) => {
    setFacultyDetails({ ...facultyDetails, designation: value });
    setActiveDes(false);
  };
  const onChangeFaculty = (e) => {
    setFacultyDetails({ ...facultyDetails, [e.target.name]: e.target.value });
  };
  return (
    <form name="signin" className={styles.form} onSubmit={onSubmitForm}>
      <div className={styles.formWrapper}>
        {/* <div className={styles.errorMsg}>{error?errorMsg:""}</div> */}
        <div className={styles.inputControl}>
          <label htmlFor="email" className={styles.inputLabel} hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={onChangeFaculty}
            id="email"
            className={styles.inputField}
            placeholder="Email"
            value={email}
            disabled={true}
          />
        </div>
        <div className={styles.inputControl}>
          <label htmlFor="id" className={styles.inputLabel} hidden>
            Faculty Id
          </label>
          <input
            type="text"
            name="id"
            onChange={onChangeFaculty}
            id="id"
            className={styles.inputField}
            placeholder="Faculty Id"
            value={facultyDetails.id}
          />
        </div>
        <div className={styles.inputControl}>
          <label htmlFor="qualification" className={styles.inputLabel} hidden>
            Qualification
          </label>
          <input
            type="text"
            name="qualification"
            onChange={onChangeFaculty}
            id="qualification"
            className={styles.inputField}
            placeholder="Qualification"
            value={facultyDetails.qualification}
          />
        </div>
        <div className={styles.selectBox}>
          <div
            onClick={() => {
              setActiveDep(!activeDep);
            }}
            className={styles.inputField}
          >
            <p className={styles.inputPara}>
              {facultyDetails.department
                ? facultyDetails.department
                : "Select Department"}
            </p>
            <img src={arrowDown} alt="" />
          </div>
          <ul className={`${styles.options} ${activeDep ? styles.active : ""}`}>
            {department.map((op) => {
              return (
                <li
                  value={op.title}
                  onClick={() => selectHandleDep(op.title)}
                  className={`${styles.option} ${
                    facultyDetails.department === op.title ? styles.active : ""
                  }`}
                >
                  <p className={styles.optionPara}>{op.title}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.selectBox}>
          <div
            onClick={() => {
              setActiveDes(!activeDes);
            }}
            className={styles.inputField}
          >
            <p className={styles.inputPara}>
              {facultyDetails.designation
                ? facultyDetails.designation
                : "Select Designation"}
            </p>
            <img src={arrowDown} alt="" />
          </div>
          <ul className={`${styles.options} ${activeDes ? styles.active : ""}`}>
            {designation.map((op) => {
              return (
                <li
                  value={op.title}
                  onClick={() => selectHandleDes(op.title)}
                  className={`${styles.option} ${
                    facultyDetails.designation === op.title ? styles.active : ""
                  }`}
                >
                  <p className={styles.optionPara}>{op.title}</p>
                </li>
              );
            })}
          </ul>
        </div>
        
        <div className={styles.inputControl}>
          <input
            type="button"
            className={styles.inputSubmit}
            value="Previous"
            onClick={() => setStepOne(false)}
          />
        </div>
      </div>
      <div className={styles.formWrapper}>
      <div className={styles.inputControl}>
          <label htmlFor="wardenOfHostel" className={styles.inputLabel} hidden>
            Warden of Hostel (if not NA)
          </label>
          <input
            type="text"
            name="wardenOfHostel"
            onChange={onChangeFaculty}
            id="wardenOfHostel"
            className={styles.inputField}
            placeholder="Warden of Hostel (if not NA)"
            value={facultyDetails.wardenOfHostel}
          />
        </div>
        <div className={styles.inputControl}>
          <label htmlFor="hodOfDepartment" className={styles.inputLabel} hidden>
            Head of Department (if not NA)
          </label>
          <input
            type="text"
            name="hodOfDepartment"
            onChange={onChangeFaculty}
            id="hodOfDepartment"
            className={styles.inputField}
            placeholder="Head of Department (if not NA)"
            value={facultyDetails.hodOfDepartment}
          />
        </div>
        <div className={styles.inputControl}>
          <label htmlFor="deanOfCollege" className={styles.inputLabel} hidden>
            Dean of College (if not NA)
          </label>
          <input
            type="text"
            name="deanOfCollege"
            onChange={onChangeFaculty}
            id="deanOfCollege"
            className={styles.inputField}
            placeholder="Dean of College (if not NA)"
            value={facultyDetails.deanOfCollege}
          />
        </div>
        <div className={styles.inputControl}>
          <label
            htmlFor="reseachInterests"
            className={styles.inputLabel}
            hidden
          >
            Research Interests
          </label>
          <input
            type="text"
            name="researchInterests"
            onChange={onChangeFaculty}
            id="reseachInterests"
            className={styles.inputField}
            placeholder="Reseach Interests"
            value={facultyDetails.researchInterests}
          />
        </div>
        <div className={styles.inputControl}>
          <label htmlFor="bioWebLink" className={styles.inputLabel} hidden>
            Website Link
          </label>
          <input
            type="text"
            name="bioWebLink"
            onChange={onChangeFaculty}
            id="bioWebLink"
            className={styles.inputField}
            placeholder="Website Link"
            value={facultyDetails.bioWebLink}
          />
        </div>
        {/* <div className={styles.inputControl}>
					<label htmlFor="Cpassword" className={styles.inputLabel} hidden>Confirm Password</label>
					<input type="password" name="cpassword" onChange={onChange} id="Cpassword" className={styles.inputField} placeholder="Confirm Password"/>
				</div> */}
        <div className={styles.inputControl}>
          {/* <a href="#" className={`${styles.text} ${styles.textLinks}`}>Forgot Password</a> */}

          <input
            type="submit"
            name="submit"
            className={styles.inputSubmit}
            value="Submit"
          />
        </div>
      </div>
    </form>
  );
};

export default FacultyForm;
