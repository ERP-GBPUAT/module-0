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
 
  const [loggedUser, setLoggedUser] = useState({user:{},details:{}});
  const link = "http://localhost:8080";
  const [loading, setLoading] = React.useState(false);

  const fetchuserdata = async () => {


    // setLoading(true)
    try {
      const requestHeaders = {
        "Content-type": "application/json",
        "token": localStorage.getItem("auth_token"),
      };
      const resposne = await fetch(`http://localhost:8080/user/getUser`, {
        method: "GET",
        headers: requestHeaders,
      });
      const u = await resposne.json();
      console.log(u);
      localStorage.setItem("user", JSON.stringify(u.user));
      setLoggedUser({...loggedUser,user:u.user});
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchUserDetails = async () => {
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
      if (u.msg==="success") {
        // localStorage.setItem("user", JSON.stringify(u));
        setLoggedUser({
          ...loggedUser,
          details:u.data,
        });
        console.log(u);
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
        fetchUserDetails,
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
