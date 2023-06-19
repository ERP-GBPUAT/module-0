import React, { useState } from "react";
import styles from "./Login.module.css";
import Select from "react-select";

const StaffForm = ({ setStaffDetails,error, staffDetails ,onSubmitForm }) => {
  const [role, setRole] = useState();
  const options = [
    { value: "librarian", label: "Librarian" },
    { value: "comptroller", label: "Comptroller" },
    { value: "admin", label: "Admin" },
    { value: "ccf", label: "CCF Admin" },
  ];

  const onChangeFaculty = (e) => {
    setStaffDetails({ ...staffDetails,[e.target.name]: e.target.value });
  };
  const onChangeRole = (role) => {
    setRole(role)
    setStaffDetails({...staffDetails,type:role?.value});
  };
  return (
    
      <form name="signin" className={styles.form} onSubmit={onSubmitForm}>
        <div className={styles.formWrapper}>
          <div className={styles.errorMsg}>
            {error.errArr
              ? error.errArrMsg[0].msg
              : error.err
              ? error.errMsg
              : ""}
          </div>
          {/* <div className={styles.errorMsg}>{error?errorMsg:""}</div> */}
          <div className={styles.inputControl}>
            <label htmlFor="id" className={styles.inputLabel} hidden>
              Staff Id
            </label>
            <input
              type="text"
              name="id"
              onChange={onChangeFaculty}
              id="id"
              className={styles.inputField}
              placeholder="Staff Id"
              value={staffDetails.id}
            />
          </div>
          <div className={styles.inputControl}>
            <label htmlFor="type" className={styles.inputLabel} hidden>
              Role type
            </label>
            <Select
            styles={{
                control:(baseStyles,state)=>({
                    ...baseStyles,
                    backgroundColor:"rgb(221, 239, 255)",
                    border:"none",
                    borderRadius:"2rem",
                    padding:".4rem 1rem"
                })
            }}
              options={options}
              placeholder={"Select a role"}
              value={role}
              onChange={onChangeRole}
            />
          </div>
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

export default StaffForm;
