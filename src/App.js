import React, { useEffect, useRef } from "react";
import styles from "./App.module.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import Login from "./components/Authentication/Login";
import Notestate from "./context/Notestate";
import StudentRegister from "./components/Authentication/StudentRegister";
import FacultyRegister from "./components/Authentication/FacultyRegister";
import Register from "./components/Authentication/Register";
function App() {
  // const navigate = useNavigate()
  const [search,setSearch] = React.useState(false)
  const getUserData=(id)=>{
    console.log(id);
    setSearch(true)
  }
  // useEffect(() => {
    
    const sendMessage=()=>{
      // e.preventDefault()
      const rec1=document.getElementById('reciever1')
      const rec2=document.getElementById('reciever2')
      const reciever1 = rec1?.contentWindow;
      const reciever2 = rec2?.contentWindow;
        // e.preventDefault();
        let token = localStorage.getItem('token')
        let user = localStorage.getItem('data');
        // console.log(e);
        // console.log(token,"data",data);
        reciever1?.postMessage({token,user},'*')
        reciever2?.postMessage({token,user},'*')
        // rec1?.remove();
        // rec2?.remove()
    }
    useEffect(()=>{
      // if(localStorage.getItem('token') && localStorage.getItem('token')!=undefined){
        sendMessage()
      // }
      // else navigate("/login")
    },[])
  // }, [])
  
  return (
    <BrowserRouter>
      <Notestate>
        <div className={styles.App}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/login" element={<Login sendMessage={sendMessage} />}></Route>
            <Route path="/register" element={<Register/>}></Route>

            <Route path="/facultyRegister" element={<FacultyRegister sendMessage={sendMessage} />}></Route>
            <Route path="/studentRegister" element={<StudentRegister sendMessage={sendMessage} />}></Route>
          </Routes>
        </div>
        <iframe id="reciever1" src="http://localhost:3001" width={500} height={200} ><p>hello</p></iframe>
        <iframe id="reciever2" src="http://localhost:3002" width={500} height={200} ><p>hello</p></iframe>
      </Notestate>
    </BrowserRouter>
  );
}

export default App;
