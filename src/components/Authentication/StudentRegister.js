import React,{useState} from "react";
import StudentForm from "./StudentForm";
import styles from "./Login.module.css"
import MainDetails from "./MainDetails";
import { useNavigate } from "react-router-dom";

const StudentRegister = ({sendMessage}) => {
  const navigate = useNavigate()
    const [stepOne,setStepOne] =useState(false)
    const [error,setError] = useState({err:false,errMsg:"",errArr:false,errArrMsg:""})
  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
    password: "",
    isStudent:true,
    isFaculty:false,
    isStaff:false,
    cpassword: "",
    gender: "",
    address: "",
    phoneNo: "",
    dob: "",
  });
  const [studentDetails, setStudentDetails] = React.useState({
    id:"",
    degree: "",
    discipline: "",
    fatherName: "",
    motherName: "",
    parentPhone: "",
    parentEmail: "",
    FacultyId:"",
    hostel: "",
    roomNo: "",
    cgpa: 0,
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
  const onSubmitForm=async(e)=>{
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8080/student/register',{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify({user:userData,student:{
        id:studentDetails.id,
        discipline:studentDetails.discipline,
        degree:studentDetails.degree,
        fatherName:studentDetails.fatherName,
        motherName:studentDetails.motherName,
        parentPhone:studentDetails.parentPhone,
        parentEmail:studentDetails.parentEmail,
        FacultyId:studentDetails.FacultyId,
        hostel:studentDetails.hostel,
        roomNo:studentDetails.roomNo,
        cgpa:studentDetails.cgpa,
        batch:studentDetails.batch
      }})
    })
    const data = await res.json();
    console.log(data);
    if(data.msg==="success"){
      localStorage.setItem("token",data.data.token);
      localStorage.setItem("data",JSON.stringify(data.data.data));
      navigate("/")
      sendMessage()
    }
    else if(data.msg==="failure"){
      setError({...error,err:true,errMsg:data.data.error});
    }
    } catch (e) {
      console.log(e);
      setError({...error,err:true,errMsg:"Unable to Register. Please try again after sometime"});
    }
    console.log(JSON.stringify(studentDetails));
    console.log(userData);
  }
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {stepOne ? (
          <StudentForm studentDetails={studentDetails} setStudentDetails={setStudentDetails} onSubmitForm={onSubmitForm} onChangeStudent={onChangeStudent} error={error} />
        ) : (
          <MainDetails userData={userData} onChangeUser={onChangeUser} onSubmitUser={onSubmitUser} error={error} />
        )}
      </div>
    </main>
  );
};

export default StudentRegister;
