import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div class="col-3">
      <div class="card">
        <img class="img-fluid" alt={props.name} src={require("../../images/" + props.image)} />
        {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
            𝘅
      </span> */}
      </div>
    </div>
  );
}

export default FriendCard;
