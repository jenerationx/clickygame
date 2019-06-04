import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="col-3">
      <div className="card" onClick={() => props.clickedFriend(props.id)}  >
        <img className="img-fluid" alt={props.name} src={require("../../images/" + props.image)} />
      </div>
    </div>
  );
}

export default FriendCard;
