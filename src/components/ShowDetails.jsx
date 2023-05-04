import React from "react";
import style from './styles/ShowDetails.css';


export default function ShowDetails({show}) {
  const { image, name, summary } = show;

  return (
    <div className="show-details j-center ">
      <h5>{name}</h5>
        <div className="card" style={{width:'300px', height:'auto'}}>

      <img src={image?.original} alt="" />
        </div>
        <div className="summary">
        <p>{summary}</p>

        </div>
    </div>
  );
}
