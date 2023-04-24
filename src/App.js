import React, { useContext } from "react";
import styles from "./App.module.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Notestate from "./context/Notestate";
import HomePage from "./components/Module3/HomePage";
import FacultyDashboard from "./components/Module3/FacultyDashboard";
import FacultyData from "./components/Authentication/FacultyData";
import NoteContext from "./context/Notecontext";
import FacultyProfile from "./components/Module3/FacultyProfile";
import ResearchDetails from "./components/Module3/ResearchDetails";
//import teacherabout from "./components/Module3/DashboardComponents/Teacherabout";
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
          
            <Route path="/module_3" element={<HomePage getUserData={getUserData} />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/facultyregister" element={<FacultyData />}></Route>
            {/* <Route path="/facultyDashboard" element={<FacultyDashboard faculty={faculty} search={search} setFaculty={setFaculty} />} /> */}
            <Route path="/facultyDashboard" element={<FacultyProfile  />} />
            <Route path="/faculty/research/:id" element={<ResearchDetails/>} />
            <Route path="/faculty/addResearch" element={<ResearchDetails  />} />
          </Routes>
        </div>
      </Notestate>
    </BrowserRouter>
  );
}

export default App;
