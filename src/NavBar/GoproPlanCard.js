import React from "react";
import "./GoProPlanCard.css";
import {IoCheckmarkCircle} from 'react-icons/io5'



function GoproPlanCard(props) {

  return (
    <div
      className="gopro-plan-card-container"
      style={{ backgroundColor: props.plan.mainStyle.bg }}
    >
        <div className="plans-card-header">
            <span>JioSaavn</span>
        </div>
        <div className="plans-card-content">
            <h1>{props.plan.duration}</h1>
            <p className="plan-cost">{props.plan.cost}</p>
            <p className="plan-offer">{props.plan.offer}</p>
            <div className="amazon-paytm">
                <div className="pay-amazon" style={{ backgroundColor: props.plan.payStyle.bg , border: props.plan.payStyle.border}} > <IoCheckmarkCircle /> Pay with Amazon Pay</div>
                <div className="pay-paytm" style={{ backgroundColor: props.plan.payStyle.bg , border: props.plan.payStyle.border }} > <IoCheckmarkCircle /> Pay with Paytm</div>
            </div>
            <div className="pay-submit-btn" style={{ backgroundColor: props.plan.payBtnStyle.bg , color: props.plan.payBtnStyle.color }} >
                <span>{props.plan.submit}</span>
            </div>
        </div>
    </div>
  );
}

export default GoproPlanCard;
