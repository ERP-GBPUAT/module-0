import React from 'react'
import Card from './MiscComp/Card'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  const list=[
    {
      title:"Leave for Faculty",
      route:"module_1",
      description:"Leave Management system for faculty"
    },
    {
      title:"No Dues",
      route:"module_2",
      description:"No dues for student and Employee"
    },
    {
      title:"Faculty Research",
      route:"module_3",
      description:"Faculty research details entry/display and search system"
    },
    {
      title:"Advisor and Advisee details",
      route:"module_4",
      description:"Advsior and advisee details entry/display and search system"
    },
    {
      title:"Department Inventory Information",
      route:"module_5",
      description:"Department inventory information system"
    },
    {
      title:"Students Record Management",
      route:"module_6",
      description:"Students record management entry/display and search system"
    },
    {
      title:"Complaints for Hostel Amenitites",
      route:"module_7",
      description:"Students complaints for hostel amenitites"
    },
    {
      title:"Student Leave",
      route:"module_8",
      description:"Student leave management system"
    },
    {
      title:"Online CDB for complaint",
      route:"module_9",
      description:"Online CDB for complaint registration/ minutes record keeping and record searching"
    },
    {
      title:"Circulars/ Notices/ Minutes/ Time Table",
      route:"module_10",
      description:"Online display of department circulars/ Notices/ Minutes/ Time Table"
    },
  ]
  return (
    <div className={styles.dashBoard}>
      <div className={styles.grid}>
        {list?.map((listitem)=>{
          return <Card key={listitem.route} moduleList={listitem}/>
        })}
      </div>
    </div>
  )
}

export default Dashboard