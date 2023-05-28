import React from "react";
import styles from "./Login.module.css"
import { department, designation } from "../MiscComp/OptionsList";
import arrowDown from "../../Images/icons8-expand-arrow-50.png"

const FacultyForm = ({ facultyDetails,onSubmitForm,setFacultyDetails,error }) => {
  const [activeDep,setActiveDep] = React.useState(false)
  const [activeDes,setActiveDes] = React.useState(false)
  
  const selectHandleDep=(value)=>{
    setFacultyDetails({...facultyDetails,department:value})
    setActiveDep(false)
  }
  const selectHandleDes=(value)=>{
    setFacultyDetails({...facultyDetails,designation:value})
    setActiveDes(false)
  }
  const onChangeFaculty = (e) => {
    setFacultyDetails({ ...facultyDetails, [e.target.name]: e.target.value });
  };
  return (
    <section className={styles.wrapper}>
      <div className={styles.heading}>
        <h1 className={`${styles.text} ${styles.textLarge}`}>
          Faculty Information
        </h1>
        {/* <p className={`${styles.text} ${styles.textNormal}`}>Already a user? <span><Link to="/login" className={`${styles.text} ${styles.textLinks}`}>Sign in</Link></span> */}
        {/* </p> */}
      </div>
      <form name="signin" className={styles.form} onSubmit={onSubmitForm}>
        <div className={styles.formWrapper}>
          <div className={styles.errorMsg}>
            {error.errArr ? error.errArrMsg[0].msg : error.err ? error.errMsg : ""}
          </div>
          {/* <div className={styles.errorMsg}>{error?errorMsg:""}</div> */}
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
            <ul
              className={`${styles.options} ${activeDep ? styles.active : ""}`}
            >
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
                  : "Select Department"}
              </p>
              <img src={arrowDown} alt="" />
            </div>
            <ul
              className={`${styles.options} ${activeDes ? styles.active : ""}`}
            >
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
    </section>
  );
};

export default FacultyForm;
