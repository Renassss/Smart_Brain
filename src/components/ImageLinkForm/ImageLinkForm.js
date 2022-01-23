import React from "react";
import "./ImageLinkForm.css";
 

const ImageLinkForm = ({search,asd , onButtonSubmit}) => {
  return (
    <div className="">
      <p className="f3 b">{"This magic brain detect faces in your picture. give it a try."}</p>
      <div className="w-50 form center pa4 br3 shadow-5">
        <input onChange={search} className="f4 w-70 pa2" type={"text"} placeholder="Enter The Link" />
        <button onClick={onButtonSubmit} className="w-30 f4 grow white bg-light-purple ph3 pv2 dib link b2">Detect</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
