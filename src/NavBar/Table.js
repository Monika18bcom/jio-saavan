import React from 'react'
import './Table.css'

function Table({e}) {
  return (
    <tr className='table-row-section'>
        <td className='data1'>{e}</td>
        <td className='data2'>Free</td>
        <td className='data3'>Pro</td>
    </tr>
  )
}

export default Table