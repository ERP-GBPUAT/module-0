import React, { useContext, useState,useEffect } from "react";
import "./FacultyDashboard.css";
import PersonImg from "../../Images/PersonImg.png";
import back from "../../Images/icons8-left-arrow-64.png";
import addbtn from "../../Images/icons8-plus-math-90.png";
import edit from "../../Images/icons8-pencil-90.png";
import { Link } from "react-router-dom";
import NoteContext from "../../context/Notecontext";

const FacultyDashboard = ({ userData, search }) => {
  const {loggedUser} = useContext(NoteContext)
  const [faculty,setFaculty ] =useState({})
  const [loading, setLoading] = useState(false);
  const fetchFacultyData = async () => {
    setLoading(true);
    try {
      const requestHeaders = {
        "Content-type": "application/json",
        token: localStorage.getItem("auth_token"),
      };
      const resposne = await fetch(
        `http://localhost:8080/facultyApi/${search?userData.id:JSON.parse(localStorage.getItem('user')).id}`,
        {
          method: "GET",
          headers: requestHeaders,
        }
      );
      const u = await resposne.json();
      if (u.success) {
        // localStorage.setItem("user", JSON.stringify(u));
        setFaculty(u.user)
        console.log(u);
      }else{
        console.log(u.error);
      }
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false)
  };
  useEffect(() => {
    fetchFacultyData();
  }, [])
  
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="back">
            <Link to="/">
              <img src={back} alt="" /> Back
            </Link>
          </div>
          <div className="dashboard">
            <div className="dashDetails">
              <img src={PersonImg} alt="" />
              <div className="name">
                <h1>{faculty.users?.username}</h1>
                <span>{faculty.designation + ", " + faculty.department}</span>
              </div>
            </div>
            <div className="grid">
              <div className="grid1">
                <div className="areaResearch">
                  <div className="heading">Areas of Research</div>
                  <div className="box">
                    <ul>
                      {/* <li>{faculty.email}</li> */}
                      <li>Research Topic 1</li>
                      <li>Research Topic 2</li>
                      <li>Research Topic 3</li>
                      <li>Research Topic 4</li>
                    </ul>
                    <Link to="/form" className="addbtn">
                      <img src={addbtn} alt="" />
                      Add
                    </Link>
                  </div>
                </div>
                <div className="education">
                  <div className="heading">Education</div>
                  <div className="box">
                    <div className="details">
                      <div>Institute Name</div>
                      <div>Year of Graduation and Other Details.</div>
                    </div>
                    <button className="editbtn">
                      <img src={edit} alt="" />
                      Edit
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid2">
                <div className="contact">
                  <div className="heading">Contact Details</div>
                  <div className="box">
                    <div className="details">
                      <div>
                        Web Address - <a href="#">Click here</a>{" "}
                      </div>
                      <div>{"Email id - " + faculty.email}</div>
                      <div>{"Phone No. - " + faculty.phone}</div>
                      <div>Qualification - XYZ, ABC</div>
                      <div>{"Designation - " + faculty.designation}</div>
                      <div>Research Interests - Lorem Ipsum</div>
                      <div>.</div>
                      <div>.</div>
                      <div>.</div>
                      <div>.</div>
                      <div>.</div>
                    </div>
                    {/* {faculty.user.email===loggedUser.user.email?<button className="editbtn"><img src={edit} alt="" />Edit</button>:<></>} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FacultyDashboard;
