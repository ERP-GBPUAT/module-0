import React,{useState} from "react";
import StudentForm from "./StudentForm";
import styles from "./Login.module.css"
import MainDetails from "./MainDetails";

const StudentRegister = () => {
    const [stepOne,setStepOne] =useState(false)
    const [error,setError] = useState({err:false,errMsg:"",errArr:false,errArrMsg:""})
  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
    password: "",
    isStudent:true,
    isFaculty:false,
    cpassword: "",
    gender: "",
    address: "",
    phoneNo: "",
    dob: "",
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
    batch: "",
  });
  const onChangeStudent = (e)=>{
    setStudentDetails({ ...studentDetails, [e.target.name]: e.target.value });
  }
  const onChangeUser = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const onSubmitUser=(e)=>{
    e.preventDefault();
    setStepOne(true)
    console.log(studentDetails);
  }
  const onSubmitForm=(e)=>{
    e.preventDefault();
    console.log(studentDetails);
  }
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {stepOne ? (
          <StudentForm studentDetails={studentDetails} onSubmitForm={onSubmitForm} onChangeStudent={onChangeStudent} error={error} />
        ) : (
          <MainDetails userData={userData} onChangeUser={onChangeUser} onSubmitUser={onSubmitUser} error={error} />
        )}
      </div>
    </main>
  );
};

export default StudentRegister;
