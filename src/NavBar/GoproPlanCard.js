import React from 'react'

function GoproPlanCard(props) {
    // console.log(props.plan)
  return (
    <div className='gopro-plan-card-container'>
        <div className='plans-card-header'>
            <span>JioSaavn</span>
        </div>
        <div className='plans-card-content'>
            <h1>{props.plan.duration}</h1>
            <p>{props.plan.cost}</p>
            <p>{props.plan.offer}</p>
            <div>
                <div>Pay with Amazon Pay</div>
                <div>Pay with Paytm</div>
            </div>
            <div>
                <span>{props.plan.submit}</span>
            </div>
        </div>
    </div>
  )
}

export default GoproPlanCard