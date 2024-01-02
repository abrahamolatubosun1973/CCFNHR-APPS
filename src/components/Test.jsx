import React from "react";
import { Link } from "react-router-dom";
import NMRS from "./Upload";

const Test = () => {
  return (
    <div>
      <h2>Test</h2>
      <nav>
        {/* <Link to="/">Home</Link>|{""} */}
        <Link to="NMRS">NMRS</Link>
      </nav>
    </div>
  );
};

export default Test;
