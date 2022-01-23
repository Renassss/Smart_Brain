import React from "react";

const Navigation = ({onRouteChange,isSignedIn}) => {
  if (isSignedIn) {
    return(
    <nav className="flex justify-end">
      <p onClick={()=>onRouteChange("signin")} className="f3 pa3 link dim  pointer hot-pink">Sign Out</p>
    </nav>
    );
    }
    else{
      return(
      <nav className="flex justify-end">
      <p onClick={()=>onRouteChange("signin")} className="f3 pa3 link dim  pointer hot-pink">Sign In</p>
      <p onClick={()=>onRouteChange("register")} className="f3 pa3 link dim  pointer hot-pink">Register</p>
    </nav>
    );
    }
};

export default Navigation;
