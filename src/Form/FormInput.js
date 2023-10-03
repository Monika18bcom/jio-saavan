import React from "react";
import "./FormInput.css";

function FormInput(props) {
  console.log(props)
  return (
    <div
      className="form-input-container"
      style={{
        width: props.width,
        height: props.height,
        gap: props.gap,
        borderRadius: props.borderRadius,
        backgroundColor: props.bg,
        border:props.border,
      }}
    >
      {props.isMobileLogin && (
        <img
          className="country-flag"
          src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
          alt="country-flag"
        ></img>
      )}
      <input
        className="form-input"
        type={props.type}
        placeholder={props.placeHolder}
        style={{
          height:'100%',
          width:props.inputWidth,
          textAlign:props.textAlign
        }}
      />
    </div>
  );
}

export default FormInput;
