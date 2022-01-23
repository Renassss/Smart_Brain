import React from "react";

const Rank =({userInfo,rank})=> {
  
  return (
    <div className="white">
    <div className="f3">
    {<span className="b f3 dark-red dim ttc">{userInfo}</span>}
    {" Your Current Rank is..."}
    </div>
    <div className="f2 b dark-red">
    {rank}
    </div>
      
    </div>
  );
};

export default Rank;
