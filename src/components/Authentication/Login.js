import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css"
const Login = ({sendMessage}) => {
	const navigate = useNavigate()
	const [credentials, setCredentials] = React.useState({ email: "", password: "" })
	const [invalidCredentials, setInvalidCredentials] = React.useState(false)
	const onChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value })
	}
	const submitLoginForm = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch('http://localhost:8080/user/login', {
				method: "POST",
				headers: {
					"Content-type": "application/json"
				},
				body: JSON.stringify({ email: credentials.email, password: credentials.password })
			})
			const json = await res.json();
			console.log(json);
			if (json.msg==="success") {
				console.log(json.data.token);
				localStorage.setItem("token",json.data.token)
				localStorage.setItem("data", JSON.stringify(json.data.data))
				sendMessage(json.data.token,json.data.data)
				navigate("/")
			} else if(json.msg==="failure"){
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
				<section className={`${styles.wrapper} ${styles.loginWrapper}`}>
					<div className={styles.heading}>
						<h1 className={`${styles.text} ${styles.textLarge}`}>Sign In</h1>
						<p className={`${styles.text} ${styles.textNormal}`}>New user? <span><Link to="/register" className={`${styles.text} ${styles.textLinks}`}>Create an account</Link></span>
						</p>
					</div>
					<form name="signin" className={styles.form} onSubmit={submitLoginForm}>
						<div className={styles.loginWrapper}>
							<div className={styles.errorMsg}>{invalidCredentials ? "Invalid Credentials" : ""}</div>
							<div className={styles.inputControl}>
								<label htmlFor="email" className={styles.inputLabel} hidden>Email Address</label>
								<input type="email" name="email" onChange={onChange} id="email" className={styles.inputField} placeholder="Email Address" />
							</div>
							<div className={styles.inputControl}>
								<label htmlFor="password" className={styles.inputLabel} hidden>Password</label>
								<input type="password" name="password" onChange={onChange} id="password" className={styles.inputField} placeholder="Password" />
							</div>
							<div className={styles.inputControlBox}>
								<Link to="/" className={`${styles.text} ${styles.textLinks}`}>Forgot Password</Link>
								<input type="submit" name="submit" className={styles.inputSubmit} value="Sign In" />
							</div>
						</div>
					</form>
				</section>
			</div>
		</main>
	);
};

export default Login;
