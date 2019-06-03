import React from "react";
import "./style.css";

function Navbar(props) {
  return <nav class="navbar navbar-expand-lg bg-danger text-white sticky-top">
  <div>Clicky Game</div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse mr-auto " id="navbarText">
    <ul class="navbar-nav mr-auto">
    </ul>
    <span class="navbar-text">
     Score: 0  High Score: 0
    </span>
  </div>
</nav>

}

export default Navbar;
