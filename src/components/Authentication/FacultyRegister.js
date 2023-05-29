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
  const onSubmitForm=async(e)=>{
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8080/faculty/register',{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:{user:userData,faculty:facultyDetails}
    })
    const data = res.json();
    if(data.msg==="success"){
      localStorage.setItem("token",data.data.token);
      localStorage.setItem("user",data.data.data);
    }
    else if(data.msg==="failure"){
      setError({...error,err:true,errMsg:data.data.error});
    }
    } catch (error) {
      console.log(error);
      setError({...error,err:true,errMsg:"Unable to Register. Please try again after sometime"});
    }
    console.log(facultyDetails);
  }
  const onSubmitUser=async(e)=>{
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
