import React from "react";
import Tilt from "react-tilt";
import brain from "./Logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="">
      <Tilt
        className="Tilt asd shadow-5 br3 ma5 bg-light-blue flex items-center justify-center"
        options={{ max: 35 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">  <img alt="Logo" src={brain}/> </div>
      </Tilt>
      
    </div>
  );
};

export default Logo;
