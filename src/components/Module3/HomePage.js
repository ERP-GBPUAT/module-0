import React, { useState } from "react";
import "./HomePage.css";
import searchIcon from "../../Images/icons8-search-50.png";
import SortIcon from "../../Images/icons8-funnel-50.png";
import { faculties } from "./jsonData";
import Pagination from "./components/Pagination";
import { Usefilter } from "../../context/Notestate";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { state } = Usefilter()
  const [data3,setdata3]=useState("")
  const [data, setData] = React.useState(faculties);
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowperPage] = React.useState(15);
  const [resType, setResType] = useState("All");
  const [totalrows, setTotalrows] = useState(data.length);
  const [searchName, setSearchName] = useState("");
  const [currentTable, setCurrentTable] = React.useState([])
  const { dispatch } = Usefilter()
const navigate=useNavigate()
  React.useEffect(() => {
    const func = () => {
      setLoading(true)
      const indexOfLastPost = currentPage * rowperPage;
      const indexofFirstPost = indexOfLastPost - rowperPage;
      setCurrentTable(data.slice(indexofFirstPost, indexOfLastPost))
      setLoading(false)
    }
    func();
  }, [ totalrows])
  const handleSearch = (e) => {
    setSearchName(e.target.value);
  };
  const HandleSearchBtn =(faculties,searchName) => {
   // setLoading(true)
    
    const x=faculties.filter((n) =>searchName.length>0? n.username.toLowerCase().includes(searchName.toLowerCase()):faculties)
   // setTotalrows(data.length)
  //  setLoading(false);
    return x;
  }
  const paginate = (number) => {
    setCurrentPage(number);
    // console.log(number);
  };
  const [data1, setData1] = useState([])
  const [data2,setData2]=useState([])
 
  const send = (e) => {
    if (e.target.checked)
      setData1([...data1, e.target.name])
    else {
      setData1(data1.filter((c) => c != e.target.name))
    }

  }
  const send1 = (e) => {
    if (e.target.checked)
    setData2([...data2, e.target.name])
  else {
    setData2(data2.filter((c) => c != e.target.name))
  }

    
  }
  const branch = (products, branch) => {
    const branchdata = products.filter((c) => branch.length > 0 ? branch.includes(c.department) : products

    )
    return branchdata
  }
  const designation = (products, desigination) => {
    const designationdata = products.filter((c) => desigination.length > 0 ? desigination.includes(c.designation) : products

    )
    return designationdata
  }

const reasrctype=(products,rt)=>{
  let researchdata
  if(rt==="All")
  {
    researchdata=products
  }
  else{
 researchdata=products.filter((c)=>rt.length>0?c.researchType===rt:products)
  }
return researchdata
}






const branch1=branch(faculties,data1)
const desigination1=designation(branch1,data2)
const research=reasrctype(desigination1,data3)
const search =HandleSearchBtn(research,searchName)


  return (
    <div className="homepage">
      <div className="heading">Faculty Research details Management System</div>
      <div className="navbarSelect">
        <ul className="options">
          <li
            className={`option1 ${resType === "All" ? "active" : ""}`}
            onClick={() => {
             setResType("All");
              setdata3("All")
            }}
          >
            All
          </li>
          <li
            className={`option1 ${resType === "Bks" ? "active" : ""}`}
            onClick={() => {
             setResType("Bks");
              setdata3("Books")
            }}
          >
            Books
          </li>
          <li
            className={`option1 ${resType == "BkChp" ? "active" : ""}`}
            onClick={() => {
             setResType("BkChp");
              setdata3("Bookchapter")
            }}
          >
            Book Chapter
          </li>
          <li
            className={`option1 ${resType == "Jou" ? "active" : ""}`}
            onClick={() => {
             setResType("Jou");
              setdata3("Journal")
            }}
          >
            Jounral
          </li>
          <li
            className={`option1 ${resType == "Conppr" ? "active" : ""}`}
            onClick={() => {
             setResType("Conppr");
              setdata3("conferencePaper")
            }}
          >
            Conference Paper
          </li>
          <li
            className={`option1 ${resType == "Pat" ? "active" : ""}`}
            onClick={() => {
             setResType("Pat");
              setdata3("Patents")
            }}
          >
            Patents
          </li>
        </ul>
      </div>
      <div className="searchBox">
        <div className="searchInput">
          <input
            type="text"
            onChange={handleSearch}
            value={searchName}
            placeholder="Search faculty name"
          />
         </div>
      </div>
      <div className="mainBox">
        <div className="tableBox">
          {!loading ? <table className="table">
            <tr>
              <th>Faculty Name</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Research Type</th>
              <th>Research topic</th>
              <th>Year Published</th>
            </tr>
            {search?.map((row) => {
              return (
                <>
          <tr key={row._id} onClick={()=>navigate(`/faculty/research/${row._id}`)}>
                  <td>{row.username}</td>
                  <td>{row.designation}</td>
                  <td>{row.department}</td>
                  <td>{row.researchType}</td>
                  <td>{row.researchTitle}</td>
                  <td>{row.year}</td>
                </tr>
                </>
              );
            })}
          </table> : "Loading"}
        </div>
        <div className="filterBox">
          <div className="filterHead">
            <img className="searchicon" src={SortIcon} />
            Filter
          </div>
          <div className="filterData">
            <div className="filterTypes">
              <div className="filterTypeHead">Departments</div>
              <ul className="filterList">
                <li><input type="checkbox" name="IT" onChange={(e) => send(e)} /> Information technology</li>
                <li><input type="checkbox" name="ME" onChange={(e) => send(e)} /> Mechanical engineering</li>
                <li><input type="checkbox" name="CE" onChange={(e) => send(e)} /> Civil engineering</li>
                <li><input type="checkbox" name="EE" onChange={(e) => send(e)} />Electrical engineering</li>
                <li><input type="checkbox" name="AE" onChange={(e) => send(e)} /> Agriculture engineering</li>
                <li><input type="checkbox" name="CSE" onChange={(e) => send(e)} /> Computer engineering</li>
                <li><input type="checkbox" name="ECE" onChange={(e) => send(e)} /> Electronics engineering</li>
                <li><input type="checkbox" name="IPE" onChange={(e) => send(e)} /> Industrial engineering</li>
              </ul>
            </div>
            <div className="filterTypes">
              <div className="filterTypeHead">Designation</div>
              <ul className="filterList">
                <li><input type="checkbox" name="AssociateProfessor" onChange={(e) => send1(e)} />AssociateProfessor</li>
                <li><input type="checkbox" name="Asst.Professor" onChange={(e) => send1(e)} />Asst.Professor</li>
                <li><input type="checkbox" name="Professor" onChange={(e) => send1(e)} />Professor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {!loading ? <Pagination
        rowperPage={rowperPage}
        totalrows={totalrows}
        paginate={paginate}
        data={research}
      /> : ""}
    </div>
  );
};

export default HomePage;
