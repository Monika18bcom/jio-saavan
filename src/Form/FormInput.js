import React, { useContext } from "react";
import { JiosaavnContext } from "../App/App";
import "./FormInput.css";

function FormInput(props) {
  // console.log(props.onChange)
  const { isMobileLogin } = useContext(JiosaavnContext)
  return (
    <div
      className="form-input-container"
      style={{
        width: props.width,
        height: props.height,
        gap: props.gap,
        borderRadius: props.borderRadius,
        backgroundColor: props.bg,
        border:props.border ? props.border : '1px solid #e9e9e9',
      }}
    >
      {isMobileLogin && (
        <img
          className="country-flag"
          src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
          alt="country-flag"
        ></img>
      )}
      <input
        className="form-input"
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.isPlaceholderVisible ? props.placeHolder : ''}
        style={{
          height:'100%',
          width:props.inputWidth,
          textAlign:props.textAlign,
          '::placeholder': {
            color: 'red'
          }
          // color: props.border
        }}
      />
    </div>
  );
}

export default FormInput;
