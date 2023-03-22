import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

const App = () => (
  <>
<h1> My top netflix movies</h1>
  {Sdata.map((val, index) => {   // Using fat arrow function
    return (
    <Card key = {index}
      imgsrc={val.imgsrc}
      title={val.title}
      name={val.name}
      link={val.Link}
    />
  );
  })}
  </>
);
export default App;
