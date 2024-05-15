import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const index = () => {
  return (
    <div id="Navbar">
      <h2 id="Logo">TODO-LIST</h2>
      {/* <h4 id="Quotes">My Day</h4> */}
      <Link className="Link" to="/">
        Home
      </Link>
      <Link className="Link" to="/deletedActivities">
        Bin
      </Link>
    </div>
  );
};

export default index;
