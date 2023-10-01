import React from "react";

function FormButton(props) {
  console.log(props)
  return (
    <div
      className="form-button"
      style={{
        backgroundColor: props.bg,
        color: props.color,
        textAlign: props.textAlign,
        height: props.height,
        width: props.width,
        borderRadius: props.borderRadius,
        padding: props.padding,
      }}
    >
      {props.children}
    </div>
  );
}

export default FormButton;
