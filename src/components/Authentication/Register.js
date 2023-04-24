import React,{useContext} from "react";
import { useNavigate,Link } from "react-router-dom";
import styles from "./Login.module.css"
import NoteContext from "../../context/Notecontext";

const Register = () => {
	const navigate = useNavigate()
	const {fetchuserdata,setLoggedUser} = useContext(NoteContext)
	const [credentials,setCredentials] = React.useState({username:"",email:"",password:"",cpassword:""})
	const [errorArr, setErrorArr] = React.useState(false)
	const [errorArrMsg, setErrorArrMsg] = React.useState([])
	const [error, setError] = React.useState(false)
	const [errorMsg, setErrorMsg] = React.useState("")
	
	
	const onChange=(e)=>{
		setCredentials({...credentials,[e.target.name]:e.target.value})
	}


	const submitLoginForm=async(e)=>{
		e.preventDefault();
        setErrorArr(false)
        setErrorArrMsg([])
        setError(false)
        setErrorMsg("")
        // console.log(credentials.cpassword +" " +credentials.password);
        if(credentials.cpassword!==credentials.password){
            setError(true)
            setErrorMsg("Passwords did not match")
            return
        }
		try {
			const res = await fetch('http://localhost:8080/api/register',{
				method:"POST",
				headers:{
					"Content-type":"application/json"
				},
				body:JSON.stringify({username:credentials.username,email:credentials.email,password:credentials.password,cpassword:credentials.cpassword})
			})
			const json = await res.json();
			if(json.success){
				// console.log(json.token);
				localStorage.setItem("auth_token",json.token)
				fetchuserdata()
				navigate("/facultyregister")
			}else{
                if(json.errorType=="array"){
                    setErrorArr(true)
                    setErrorArrMsg(json.error)
                }else if(json.errorType=="msg"){
                    setError(true)
                    setErrorMsg(json.error)
                }
                console.log(json.error);
			}
		} catch (error) {
			console.log(error);
			
		}
		
	}

	
  return (
    <main className={styles.main}>
	<div className={styles.container}>
		<section className={styles.wrapper}>
			<div className={styles.heading}>
				<h1 className={`${styles.text} ${styles.textLarge}`}>Sign Up</h1>
				<p className={`${styles.text} ${styles.textNormal}`}>Already a user? <span><Link to="/login" className={`${styles.text} ${styles.textLinks}`}>Sign in</Link></span>
				</p>
			</div>
			<form name="signin" className={styles.form} onSubmit={submitLoginForm}>
				<div className={styles.errorMsg}>{errorArr?errorArrMsg[0].msg:error?errorMsg:""}</div>
				{/* <div className={styles.errorMsg}>{error?errorMsg:""}</div> */}
				<div className={styles.inputControl}>
					<label htmlFor="username" className={styles.inputLabel} hidden>Email Address</label>
					<input type="text" name="username" onChange={onChange} id="username" className={styles.inputField} placeholder="User name"/>
				</div>
                <div className={styles.inputControl}>
					<label htmlFor="email" className={styles.inputLabel} hidden>Email Address</label>
					<input type="email" name="email" onChange={onChange} id="email" className={styles.inputField} placeholder="Email Address"/>
				</div>
				<div className={styles.inputControl}>
					<label htmlFor="password" className={styles.inputLabel} hidden>Password</label>
					<input type="password" name="password" onChange={onChange} id="password" className={styles.inputField} placeholder="Password"/>
				</div>
				<div className={styles.inputControl}>
					<label htmlFor="Cpassword" className={styles.inputLabel} hidden>Confirm Password</label>
					<input type="password" name="cpassword" onChange={onChange} id="Cpassword" className={styles.inputField} placeholder="Confirm Password"/>
				</div>
				<div className={styles.inputControl}>
					{/* <a href="#" className={`${styles.text} ${styles.textLinks}`}>Forgot Password</a> */}
					<input type="submit" name="submit" className={styles.inputSubmit} value="Sign Up"/>
				</div>
			</form>
		</section>
	</div>
</main>
  );
};

export default Register;
