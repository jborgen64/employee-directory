import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
          <li>
            <strong>Department:</strong> {props.department}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
