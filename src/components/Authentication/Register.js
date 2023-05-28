import React, { useContext,useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";
import NoteContext from "../../context/Notecontext";
import MainDetails from "./MainDetails";

const Register = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const { setLoggedUser } = useContext(NoteContext);
  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
    password: "",
    role:"",
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
    hodOfDepartment: "",
    deanOfCollege: "",
  });
  const [studentDetails, setStudentDetails] = React.useState({
    degree: "",
    discipline: "",
    fatherName: "",
    motherName: "",
    parentPhone: "",
    parentEmail: "",
    hostel: "",
    roomNo: "",
    cgpa: "",
    batch:""
  });
  const [errorArr, setErrorArr] = React.useState(false);
  const [errorArrMsg, setErrorArrMsg] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const onChangeUser = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submitLoginForm = async (e) => {
    e.preventDefault();
    setErrorArr(false);
    setErrorArrMsg([]);
    setError(false);
    setErrorMsg("");
    // console.log(userData.cpassword +" " +userData.password);
    if (userData.cpassword !== userData.password) {
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
          name: userData.name,
          email: userData.email,
          password: userData.password,
          role: userData.role,
          gender: userData.gender,
          dob: userData.dob,
          phoneNo: userData.phoneNo,
          address: userData.address,
        }),
      });
      const json = await res.json();
      if (json.success) {
        localStorage.setItem("auth_token", json.token);
        fetchuserdata();
        navigate("/addUserDetails");
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
        {stepOne?<AddUserDetails role={userData.role} studentDetails={studentDetails} facultyDetails={facultyDetails} />:
        <MainDetails userData={userData} setStepOne={setStepOne} onChangeUser={onChangeUser} />}
      </div>
    </main>
  );
};

export default Register;
