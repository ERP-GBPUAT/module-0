import React from 'react'
import './Pagination.css'

const Pagination = ({rowperPage, totalrows,paginate }) => {
    const pageNumbers = [];
    for(let i=1;i<=Math.ceil(totalrows/rowperPage);i++){
        pageNumbers.push(i);
    }
  return (
    <div className='paginationBox'>
        <ul className='numberList'>
        <li className='pageNumbers'>
                {"<"}
            </li>
        {pageNumbers.map(numbers=>(
            <li className='pageNumbers' onClick={()=>paginate(numbers)} key={numbers}>
                {numbers}
            </li>
        ))}
        <li className='pageNumbers'>
                {">"}
            </li>
        </ul>
    </div>
  )
}

export default Pagination