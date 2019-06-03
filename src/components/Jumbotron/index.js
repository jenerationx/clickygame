import React from "react";
import "./style.css";

function Jumbotron(props) {
  return <div className="container-full-bg text-light">
    <div className="jumbotron">
      <div className="container">
        <h3> Click any image to begin, but remember which one you clicked on!  The object of the game is to click on each picture only once.  If you get all 12, you win!</h3>
      </div>
    </div>
  </div>

}

export default Jumbotron;
