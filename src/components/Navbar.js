import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import gbpu from "../Images/gbpu.png";
import styles from "./Navbar.module.css";
import person from "../Images/icons8-person-64.png";
import NoteContext from "../context/Notecontext";

const Navbar = () => {
  const navigate = useNavigate();
  const { loggedUser, fetchUserDetails,logout } = useContext(NoteContext);
  const [openMenu,setOpenMenu] = React.useState(false);
  const handleMenu = ()=>{
    setOpenMenu(!openMenu)
  }
  const handleProfile = () => {
    // fetchuserdata();
    setOpenMenu(false)
    fetchUserDetails();
    console.log(loggedUser);
    navigate("/facultyDashboard");
  };
  const handleLogout=()=>{
    logout()
    setOpenMenu(false)
  }
  return (
    <>
      
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <img className={styles.navbarImg} src={gbpu} alt="GBPUAT" />
            <div>
              Govind Ballabh Pant University of Agriculture and Technology
            </div>
          </div>
          <div className={styles.authBtn}>
            {!localStorage.getItem("token") ? (
              <Link to="/login" className={styles.btn}>
                Login
              </Link>
            ) : (
              <></>
            )}
            {localStorage.getItem("token") ? (
              <div className={styles.profileBox}>
                <div onClick={handleMenu} className={styles.profileIcon}>
                  <img src={person} alt="" />
                </div>
                {openMenu?<div className={styles.toggleMenu}>
                  <div className={styles.menuLogindetail}>Signed in as <b>Udit</b> </div>
                  <div onClick={handleProfile} className={styles.menuOption}>Profile</div>
                  <div className={styles.menuOption} onClick={handleLogout}>Logout</div>
                </div>:<></>}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
    </>
  );
};

export default Navbar;
