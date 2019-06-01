import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div class="col s2">
      <div class="card">
        <img class="card-image" alt={props.name} src={props.image} />
        {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
            𝘅
      </span> */}
      </div>
    </div>
  );
}

export default FriendCard;
