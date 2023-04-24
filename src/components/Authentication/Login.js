import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import NoteContext from "../../context/Notecontext";
import styles from "./Login.module.css"
const Login = () => {
	const {fetchuserdata,setLoggedUser} = useContext(NoteContext)
	const navigate = useNavigate()
	const [credentials,setCredentials] = React.useState({email:"",password:""})
	const [invalidCredentials, setInvalidCredentials] = React.useState(false)
	const onChange=(e)=>{
		setCredentials({...credentials,[e.target.name]:e.target.value})
	}
	const submitLoginForm=async(e)=>{
		e.preventDefault();
		try {
			const res = await fetch('http://localhost:8080/api/login',{
				method:"POST",
				headers:{
					"Content-type":"application/json"
				},
				body:JSON.stringify({email:credentials.email,password:credentials.password})
			})
			const json = await res.json();
			if(json.success){
				console.log(json.token);
				localStorage.setItem("auth_token",json.token)
				fetchuserdata()
				navigate("/module_3")
			}else{
				setInvalidCredentials(true)
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
				<h1 className={`${styles.text} ${styles.textLarge}`}>Sign In</h1>
				<p className={`${styles.text} ${styles.textNormal}`}>New user? <span><Link to="/register" className={`${styles.text} ${styles.textLinks}`}>Create an account</Link></span>
				</p>
			</div>
			<form name="signin" className={styles.form} onSubmit={submitLoginForm}>
				<div className={styles.errorMsg}>{invalidCredentials?"Invalid Credentials":""}</div>
				<div className={styles.inputControl}>
					<label htmlFor="email" className={styles.inputLabel} hidden>Email Address</label>
					<input type="email" name="email" onChange={onChange} id="email" className={styles.inputField} placeholder="Email Address"/>
				</div>
				<div className={styles.inputControl}>
					<label htmlFor="password" className={styles.inputLabel} hidden>Password</label>
					<input type="password" name="password" onChange={onChange} id="password" className={styles.inputField} placeholder="Password"/>
				</div>
				<div className={styles.inputControl}>
					<a href="#" className={`${styles.text} ${styles.textLinks}`}>Forgot Password</a>
					<input type="submit" name="submit" className={styles.inputSubmit} value="Sign In"/>
				</div>
			</form>
		</section>
	</div>
</main>
  );
};

export default Login;
