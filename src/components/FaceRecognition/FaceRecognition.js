import React from "react";
import "./FaceRecognition.css"

const FaceRecognition = ({imageUrl ,box}) => {
            return(
          <div className="mv3 center dib">
              <div className="center asd w-100">
              <img id="imggg" width="500px" height="auto" alt="" src={imageUrl}/ >
                <div className="bounding" style={{left:box.leftCol, top:box.topRow, right:box.rightCol, bottom:box.bottomRow}} ></div>
              </div>
         </div>  
      )
};

export default FaceRecognition; 