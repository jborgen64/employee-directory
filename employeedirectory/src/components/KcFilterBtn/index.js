import React from "react";
import "./style.css";

function KcFilterBtn(props) {
  return (
    <button onClick={() => props.handleKCFilter(props.location)} className="filter btn btn-primary">
        Kansas City
  </button>
  );
}

export default KcFilterBtn;