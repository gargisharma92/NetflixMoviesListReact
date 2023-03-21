import React from "react";
import ReactDOM from "react-dom"; 
import Card from "./Cards";
import Sdata from "./Sdata";
import  "./assets/style.css";


ReactDOM.render(
  <>
  <h1> My top netflix movies</h1>
  {Sdata.map((val) => {   // Using fat arrow function
    return (
    <Card 
      imgsrc={val.imgsrc}
      title={val.title}
      name={val.name}
      link={val.Link}
    />
  );
  })}
  </>,
  document.getElementById("root")
);
