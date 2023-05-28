import React, { useContext } from "react";
import { useNavigate, Link, createSearchParams } from "react-router-dom";
import styles from "./Login.module.css";
import { department, designation } from "../MiscComp/OptionsList";
import arrowDown from "../../Images/icons8-expand-arrow-50.png"
import NoteContext from "../../context/Notecontext";
import StudentForm from "./StudentForm";
import FacultyForm from "./FacultyForm";


const AddUserDetails = ({role,facultyDetails,studentDetails}) => {
  if(role==="student"){
    return <StudentForm studentDetails={studentDetails} />
  }
  else if(role==="faculty"){
    return <FacultyForm facultyDetails={facultyDetails} />
  }
 };

export default AddUserDetails;
