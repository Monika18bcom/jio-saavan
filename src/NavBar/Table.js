import React from 'react'
import './Table.css'
import {BsCheckLg} from 'react-icons/bs'
import {HiCheck} from 'react-icons/hi'
import {FaXmark} from 'react-icons/fa6'

function Table({e}) {

  return (
    <div className='table-row-section'>
      <div className='data1'>{e.col1}</div>
      <div className='data2' style={{fontSize: e.col2 !== 'Free' && '25px'  , color: !e.col2 ? '#DFDFDF' : e.col2 === true && '#2bc5b4'}}>{!e.col2 ? <FaXmark /> : e.col2 === 'Free' ? e.col2 : <HiCheck />}</div>
      <div className='data3' style={{borderRadius: (e.border === 'top' && '4px 4px 0 0') || (e.border === 'bottom' && '0 0 4px 4px') , fontSize: e.col3 !== 'Pro' && '25px' }}>{e.col3 ? e.col3 : <HiCheck /> }</div>
    </div>
  )
}

export default Table