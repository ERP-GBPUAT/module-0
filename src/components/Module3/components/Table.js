import React from "react";
import './Table.css'
const Table = ({data,currentPage,rowperPage}) => {

    

    const indexOfLastPost = currentPage * rowperPage;
  const indexofFirstPost = indexOfLastPost - rowperPage;
  const currentTable = data.slice(indexofFirstPost, indexOfLastPost);
  return (
    <table>
      <tr>
        <th>Faculty Name</th>
        <th>Designation</th>
        <th>Department</th>
        <th>Research Type</th>
        <th>Research topic</th>
        <th>Year Published</th>
      </tr>
      {currentTable?.map((row) => {
        return (
          <tr key={row._id}>
            <td>{row.username}</td>
            <td>{row.designation}</td>
            <td>{row.department}</td>
            <td>{row.researchType}</td>
            <td>{row.researchTitle}</td>
            <td>{row.year}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
