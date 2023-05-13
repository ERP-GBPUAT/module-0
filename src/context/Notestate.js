import React, { useState } from "react";
import NoteContext from "./Notecontext";
import { useReducer } from "react";
import {Reducer} from "./Reducer";
import {useContext} from"react"
import { useNavigate } from "react-router-dom";

const Notestate = ({ children }) => {
  const intialstate={
    branch:[],
    Designation:[]
  }
 
  const [loggedUser, setLoggedUser] = useState({id:null, email:"",username:"", faculty: {} });
  const link = "http://localhost:8080";
  const [loading, setLoading] = React.useState(false);

  const fetchuserdata = async () => {


    // setLoading(true)
    try {
      const requestHeaders = {
        "Content-type": "application/json",
        token: localStorage.getItem("auth_token"),
      };
      const resposne = await fetch(`http://localhost:8080/user/getUser`, {
        method: "GET",
        headers: requestHeaders,
      });
      const u = await resposne.json();
      console.log(u);
      localStorage.setItem("user", JSON.stringify(u.user));
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchFacultyData = async () => {
    try {
      const requestHeaders = {
        "Content-type": "application/json",
        token: localStorage.getItem("auth_token"),
      };
      const resposne = await fetch(
        `http://localhost:8080/facultyApi/${loggedUser.id}`,
        {
          method: "GET",
          headers: requestHeaders,
        }
      );
      const u = await resposne.json();
      if (u.success) {
        // localStorage.setItem("user", JSON.stringify(u));
        setLoggedUser({
          ...loggedUser,
          faculty:u.user,
        });
        console.log(u);
        return u;
      }else{
        console.log(u.error);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
  };
  const [state,dispatch]=useReducer(Reducer,intialstate)
   
  return (
    <NoteContext.Provider
      value={{
        link,
        fetchuserdata,
        fetchFacultyData,
        logout,
        loggedUser,
        state,
        dispatch,
        setLoggedUser,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
const Usefilter=()=>useContext(NoteContext);
export {Usefilter}
export default Notestate;
