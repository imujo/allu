import React from "react";
import { useHistory } from "react-router-dom";

function Logo() {
  const history = useHistory();

  return (
    <div className="logoDiv" onClick={() => history.push("/")}>
      <div className="logo"></div>

      <div className="logoFont">All U</div>
    </div>
  );
}

export default Logo;
