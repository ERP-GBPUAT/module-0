import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gbpu from "../Images/gbpu.png";
import styles from "./Navbar.module.css";
import person from "../Images/PersonImg.png"
import NoteContext from "../context/Notecontext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {loggedUser,fetchFacultyData} = useContext(NoteContext)
  const handleProfile = ()=>{
    // fetchuserdata();
    fetchFacultyData();
    console.log(loggedUser);
    navigate('/facultyDashboard')
  }
  return (
    <>{location.pathname==="/facultyDashboard"?<></>:(<div className={styles.navbar}>
      <div className={styles.logo}>
        <img className={styles.navbarImg} src={gbpu} alt="GBPUAT" />
        <div>Govind Ballabh Pant University of Agriculture and Technology</div>
      </div>
      <div className={styles.authBtn}>
        <Link to="/login" className={styles.btn}>Login</Link>
        {loggedUser?<button onClick={handleProfile} className={styles.profileIcon}><img src={person} alt="" /></button>:""}
      </div>
    </div>)}
    </>
    
  );
};

export default Navbar;
