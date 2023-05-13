import React,{useEffect} from 'react'
import NavbarDash from './DashboardComponents/NavbarDash'
import ResearchDash from './DashboardComponents/ResearchDash'
import { useParams } from 'react-router-dom'
import { faculties } from './jsonData'
const ResearchDetails = () => {
  const {id}=useParams() 
  const [research,setResearch] = React.useState([]);
  const [loading,setLoading] = React.useState(false);
console.log(id);


  const fetchresearch=async()=>{
  setLoading(true)
  try {
    const res=await fetch("")
    const data= await res.json()
    setResearch(data)
    setLoading(false)
  } catch (error) {
    console.log(error);
  }
  }

const filterdatauser=()=>{
  const x=faculties.filter((c)=>c._id==id)
setResearch(x)
}

console.log(research);
  useEffect(()=>{
filterdatauser()
  },[])
  return (
    <div className="main-content">
       {loading?<div>Loading...</div>: <>
        <NavbarDash />
      
        <ResearchDash data={research} />
        </>}
    </div>
  )
}

export default ResearchDetails