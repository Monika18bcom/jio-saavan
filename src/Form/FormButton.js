import React, { useState } from "react";
import './FormButton.css'

function FormButton(props) {

  const [isHover , seIsHover] = useState(false)

  return (
    <button
      className="form-button"
      type={props.type}
      style={{
        backgroundColor: isHover ? props.hoverBg :props.bg ,
        color: isHover ? props.hoverColor : props.color,
        textAlign: props.textAlign,
        height: props.height,
        width: props.width,
        borderRadius: props.borderRadius,
        padding: props.padding,
        border:props.border,
        fontWeight:props.fontWeight,
        fontSize:props.fontSize,
        cursor:props.cursor,
        opacity: isHover && props.opacity
      }}

      onClick={props.onClick}

      onMouseOver={()=> seIsHover(true)}
      onMouseOut={()=> seIsHover(false)}
    >
      {props.children}
    </button>
  );
}

export default FormButton;
