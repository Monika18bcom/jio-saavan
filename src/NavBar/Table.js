import React from 'react'
import './Table.css'
import {TiTick} from 'react-icons/ti'
import {FaXmark} from 'react-icons/fa6'

function Table({e}) {
  return (
    <tr className='table-row-section'>
        <td className='data1'>{e.col1}</td>
        <td className='data2'>{!e.col2 ? <FaXmark /> : e.col2 === 'Free' ? e.col2 : <TiTick />}</td>
        <td className='data3'>{e.col3 ? e.col3 : <TiTick /> }</td>
    </tr>
  )
}

export default Table