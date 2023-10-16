import React from 'react'
import './Table.css'
import {BsCheckLg} from 'react-icons/bs'
import {HiCheck} from 'react-icons/hi'
import {FaXmark} from 'react-icons/fa6'

function Table({e}) {

  // border-radius: 4px 4px 0 0;
  return (
    <tr className='table-row-section'>
        <td className='data1'>{e.col1}</td>
        <td className='data2' style={{fontSize: e.col2 === 'Free' && '18px'  , color: !e.col2 ? '#f6f6f6' : e.col2 === true && '#2bc5b4'}}>{!e.col2 ? <FaXmark /> : e.col2 === 'Free' ? e.col2 : <HiCheck />}</td>
        <td className='data3' style={{borderRadius: (e.border === 'top' && '4px 4px 0 0') || (e.border === 'bottom' && '0 0 4px 4px') , fontSize: e.col3 ? '18px' : '25px' }}>{e.col3 ? e.col3 : <HiCheck /> }</td>
    </tr>
  )
}

export default Table