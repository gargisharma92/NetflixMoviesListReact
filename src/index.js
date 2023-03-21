import React from "react";
import ReactDOM from "react-dom"; 
import Card from "./Cards";
import Sdata from "./Sdata";
import  "./assets/style.css";

function ncard(val){
  return (
    <Card 
      imgsrc={val.imgsrc}
      title={val.title}
      name={val.name}
      link={val.Link}
    />
  );
}

ReactDOM.render(
  <>
  <h1> My top netflix movies</h1>
  {Sdata.map(ncard)}
  </>,
  document.getElementById("root")
);
