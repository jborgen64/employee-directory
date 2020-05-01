import React from "react";
import "./style.css";

function DallasFilterBtn(props) {
  return (
    <button onClick={() => props.handleSort(props.name)} className="filter btn btn-primary">
        Sort Alphabetically
  </button>
  );
}

export default DallasFilterBtn;