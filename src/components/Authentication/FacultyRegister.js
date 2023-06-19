import React, { useState } from "react";
import FacultyForm from "./FacultyForm";
import MainDetails from "./MainDetails";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";

const FacultyRegister = ({ sendMessage }) => {
  const navigate = useNavigate();
  const [stepOne, setStepOne] = useState(false);
  const [error, setError] = useState({
    err: false,
    errMsg: "",
    errArr: false,
    errArrMsg: "",
  });

  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
    password: "",
    isStudent: false,
    isFaculty: true,
    cpassword: "",
    gender: "",
    address: "",
    phoneNo: "",
    dob: "",
  });
  const [facultyDetails, setFacultyDetails] = React.useState({
    id: "",
    department: "",
    designation: "",
    qualification: "",
    wardenOfHostel: "",
    deanOfCollege: "",
    hodOfDepartment: "",
    researchInterests: "",
    bioWebLink: "",
  });
  const onChangeUser = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      if (userData.cpassword === userData.password) {
        const res = await fetch("http://localhost:8080/faculty/register", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            user: userData,
            faculty: {
              id: facultyDetails.id,
              department: facultyDetails.department,
              designation: facultyDetails.designation,
              qualification: facultyDetails.qualification,
              researchInterests: facultyDetails.researchInterests,
              bioWebLink: facultyDetails.bioWebLink,
              wardenOfHostel:
                facultyDetails.wardenOfHostel === "NA"
                  ? null
                  : facultyDetails.wardenOfHostel,
              hodOfDepartment:
                facultyDetails.hodOfDepartment === "NA"
                  ? null
                  : facultyDetails.hodOfDepartment,
              deanOfCollege:
                facultyDetails.deanOfCollege === "NA"
                  ? null
                  : facultyDetails.deanOfCollege,
            },
          }),
        });
        const data = await res.json();
        if (data.msg === "success") {
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("data", JSON.stringify(data.data.data));
          sendMessage();
          navigate("/");
        } else if (data.msg === "failureArray") {
          console.log(data.error);
          setError({ errArr: true, errArrMsg: data.error });
        } else {
          setError({ ...error, err: true, errMsg: data.error });
        }
      }else{
        setError({ ...error, err: true, errMsg: "Password didnt matched" });
      }
    } catch (e) {
      console.log(e);
      setError({ ...error, err: true, errMsg: e });
      // setError({...error,err:true,errMsg:"Unable to Register. Please try again after sometime"});
    }
    // console.log(facultyDetails);
  };
  const onSubmitUser = async (e) => {
    e.preventDefault();

    setStepOne(true);
    // console.log(facultyDetails);
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
            {error.errArr
              ? error.errArrMsg[0].msg
              : error.err
              ? error.errMsg
              : ""}
          </div>
          <h3>Faculty Infromation</h3>
          {stepOne ? (
            <FacultyForm
              facultyDetails={facultyDetails}
              setFacultyDetails={setFacultyDetails}
              onSubmitForm={onSubmitForm}
              setStepOne={setStepOne}
              email={userData.email}
            />
          ) : (
            <MainDetails
              userData={userData}
              onChangeUser={onChangeUser}
              onSubmitUser={onSubmitUser}
              error={error}
            />
          )}
        </section>
      </div>
    </main>
  );
};

export default FacultyRegister;
