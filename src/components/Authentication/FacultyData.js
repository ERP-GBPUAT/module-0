import React, { useContext } from "react";
import { useNavigate, Link, createSearchParams } from "react-router-dom";
import styles from "./Login.module.css";
import { department, designation } from "../MiscComp/OptionsList";
import arrowDown from "../../Images/icons8-expand-arrow-50.png"
import NoteContext from "../../context/Notecontext";


const FacultyData = () => {
  const {fetchFacultyData} = useContext(NoteContext)
  const navigate = useNavigate();
  const [credentials, setCredentials] = React.useState({
    phoneno:"",
    department: "",
    designation: "",
  });


  const [errorArr, setErrorArr] = React.useState(false);
  const [errorArrMsg, setErrorArrMsg] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const [activeDep,setActiveDep] = React.useState(false)
  const [activeDes,setActiveDes] = React.useState(false)
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const selectHandleDep=(value)=>{
    setCredentials({...credentials,department:value})
    setActiveDep(false)
  }
  const selectHandleDes=(value)=>{
    setCredentials({...credentials,designation:value})
    setActiveDes(false)
  }


  const submitLoginForm = async (e) => {
    e.preventDefault();
    setErrorArr(false);
    setErrorArrMsg([]);
    setError(false);
    setErrorMsg("");
    try {
      const res = await fetch("http://localhost:8080/facultyApi/addDetails", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          'token': localStorage.getItem("auth_token"),
        },
        body: JSON.stringify({
          phone: credentials.phoneno,
          designation: credentials.designation,
          department: credentials.department,
        }),
      });
      const json = await res.json();
      if (json.success) {
        fetchFacultyData()
  
        console.log(json.faculty);
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
        <section className={styles.wrapper}>
          <div className={styles.heading}>
            <h1 className={`${styles.text} ${styles.textLarge}`}>
              Faculty Information
            </h1>
            {/* <p className={`${styles.text} ${styles.textNormal}`}>Already a user? <span><Link to="/login" className={`${styles.text} ${styles.textLinks}`}>Sign in</Link></span> */}
            {/* </p> */}
          </div>
          <form
            name="signin"
            className={styles.form}
            onSubmit={submitLoginForm}
          >
            <div className={styles.errorMsg}>
              {errorArr ? errorArrMsg[0].msg : error ? errorMsg : ""}
            </div>
            {/* <div className={styles.errorMsg}>{error?errorMsg:""}</div> */}
            <div className={styles.inputControl}>
              <label htmlFor="phoneno" className={styles.inputLabel} hidden>
                Phone Number
              </label>
              <input
                type="number"
                name="phoneno"
                onChange={onChange}
                id="phoneno"
                className={styles.inputField}
                placeholder="Phone Number"
              />
            </div>
            <div className={styles.selectBox}>
              <div onClick={()=>{setActiveDep(!activeDep)}} className={styles.inputField}>
                <p className={styles.inputPara}>{credentials.department?credentials.department:"Select Department"}</p>
                <img src={arrowDown} alt="" />
              </div>
              <ul className={`${styles.options} ${activeDep?styles.active:""}`}>
                {department.map((op) => {
                  return (
                    <li value={op.title} onClick={()=>selectHandleDep(op.title)} className={`${styles.option} ${credentials.department===op.title?styles.active:""}`}>
                      <p className={styles.optionPara}>{op.title}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.selectBox}>
              <div onClick={()=>{setActiveDes(!activeDes)}} className={styles.inputField}>
                <p className={styles.inputPara}>{credentials.designation?credentials.designation:"Select Department"}</p>
                <img src={arrowDown} alt="" />
              </div>
              <ul className={`${styles.options} ${activeDes?styles.active:""}`}>
                {designation.map((op) => {
                  return (
                    <li value={op.title} onClick={()=>selectHandleDes(op.title)} className={`${styles.option} ${credentials.designation===op.title?styles.active:""}`}>
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
          </form>
        </section>
      </div>
    </main>
  );
};

export default FacultyData;
