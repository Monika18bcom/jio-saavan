import React from "react";
import "./LogIn.css";
import FormImages from "./FormImages";
import FormContent from "./FormContent";

function LogIn({ loginType }) {

  return (
    <div className="login-container">
      <FormImages />
      <FormContent loginType={loginType} />
    </div>
  );
}

export default LogIn;
