import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div class="col-sm-3">
      <div class="card">
        <img class="img-thumbnail" alt={props.name} src={props.image} />
        {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
            𝘅
      </span> */}
      </div>
    </div>
  );
}

export default FriendCard;
