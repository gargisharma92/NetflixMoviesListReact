import React from "react";
import Images from "./Images";
import Link from "./Link";

/**
 * Display all the card details
 * @param {*} props 
 * @returns 
 */
function Card(props) {
  return (
    <>
    <div className="cards" >
        <div className="card" >
            <Images imgsrc={props.imgsrc} />       
            <div className="card-info">              
                <h2 className="card-title">{props.name}</h2>
                <Link link={props.link} />       
               
            </div>
        </div>
    </div> 
  </>
  );
}

export default Card;