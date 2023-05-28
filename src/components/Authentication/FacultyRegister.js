import React,{useState} from "react";
import FacultyForm from "./FacultyForm";
import MainDetails from "./MainDetails";
import styles from "./Login.module.css"

const FacultyRegister = () => {
  const [stepOne, setStepOne] = useState(false);
  const [error,setError] = useState({err:false,errMsg:"",errArr:false,errArrMsg:""})

  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
    password: "",
    isStudent:false,
    isFaculty:true,
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
  const onChangeUser = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const onSubmitForm=(e)=>{
    e.preventDefault();
    console.log(facultyDetails);
  }
  const onSubmitUser=(e)=>{
    e.preventDefault();
    setStepOne(true)
    console.log(facultyDetails);
  }
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {stepOne ? (
          <FacultyForm facultyDetails={facultyDetails} setFacultyDetails={setFacultyDetails} onSubmitForm={onSubmitForm} error={error} />
        ) : (
          <MainDetails userData={userData} onChangeUser={onChangeUser} onSubmitUser={onSubmitUser} error={error} />
        )}
      </div>
    </main>
  );
};

export default FacultyRegister;
