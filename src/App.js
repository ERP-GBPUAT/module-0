import React, { useEffect, useRef } from "react";
import styles from "./App.module.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/Authentication/Login";
import Notestate from "./context/Notestate";
import StudentRegister from "./components/Authentication/StudentRegister";
import FacultyRegister from "./components/Authentication/FacultyRegister";
import Register from "./components/Authentication/Register";
function App() {
  const [search,setSearch] = React.useState(false)
  const getUserData=(id)=>{
    console.log(id);
    setSearch(true)
  }
  // useEffect(() => {
    
    const sendMessage=(data)=>{
      const reciever = document.getElementById('reciever').contentWindow;
      // e.preventDefault();
      let token = localStorage.getItem('token')
      // console.log(e);
      console.log(token,"data",data);
      reciever.postMessage({token},'*')
    }
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
        <iframe id="reciever" src="http://localhost:3001" width={500} height={200} ><p>hello</p></iframe>
      </Notestate>
    </BrowserRouter>
  );
}

export default App;
