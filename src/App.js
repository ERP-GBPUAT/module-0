import React, { useContext } from "react";
import styles from "./App.module.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/Authentication/Login";
import Notestate from "./context/Notestate";
import StudentRegister from "./components/Authentication/StudentRegister";
import FacultyRegister from "./components/Authentication/FacultyRegister";
function App() {
  const [faculty,setFaculty] = React.useState({});
  const [search,setSearch] = React.useState(false)
  const getUserData=(id)=>{
    console.log(id);
    setSearch(true)
  }

  return (
    <BrowserRouter>
      <Notestate>
        <div className={styles.App}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/facultyRegister" element={<FacultyRegister />}></Route>
            <Route path="/studentRegister" element={<StudentRegister />}></Route>
          </Routes>
        </div>
      </Notestate>
    </BrowserRouter>
  );
}

export default App;
