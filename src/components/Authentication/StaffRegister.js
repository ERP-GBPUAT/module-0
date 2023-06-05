import React, { useState } from 'react'
import StaffForm from './StaffForm';
import styles from "./Login.module.css"
import { useNavigate } from 'react-router-dom';
import MainDetails from './MainDetails';

const StaffRegister = ({sendMessage}) => {
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
      isStaff:true,
      cpassword: "",
      gender: "",
      address: "",
      phoneNo: "",
      dob: "",
    });
    const [staffDetails, setStaffDetails] = React.useState({
      id: "",
      type:""
    });
    const onChangeUser = (e) => {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    const onSubmitForm = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch("http://localhost:8080/staff/register", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            user: userData,
            staff: {
              id:staffDetails.id,
              isAdmin:staffDetails.type==="admin",
              isLibrarian:staffDetails.type==="librarian",
              isCCF:staffDetails.type==="ccf",
              isComptroller:staffDetails.type==="comptroller",
            },
          }),
        });
        const data = await res.json();
        console.log(data);
        if (data.msg === "success") {
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("data", JSON.stringify(data.data.data));
          sendMessage();
          navigate("/");
        } else {
          setError({ ...error, err: true, errMsg: data.error });
        }
        // console.log("staff",staffDetails);
      } catch (e) {
        console.log(e);
        setError({ ...error, err: true, errMsg: e });
      }
    };
    const onSubmitUser = async (e) => {
      e.preventDefault();
      setStepOne(true);
    };
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          {stepOne ? (
            <StaffForm
              staffDetails={staffDetails}
              setStaffDetails={setStaffDetails}
              onSubmitForm={onSubmitForm}
              error={error}
            />
          ) : (
            <MainDetails
              userData={userData}
              onChangeUser={onChangeUser}
              onSubmitUser={onSubmitUser}
              error={error}
            />
          )}
        </div>
      </main>
    );
}

export default StaffRegister