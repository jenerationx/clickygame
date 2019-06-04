import React from "react";
import "./style.css";

const Navbar = props => 
<nav className="navbar navbar-expand-lg bg-danger text-white sticky-top">
  <div>Clicky Game</div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="ml-auto">
    <span className="navbar-text">
     Score: {props.score}  High Score: {props.highscore}
    </span>
  </div>
</nav>



export default Navbar;
