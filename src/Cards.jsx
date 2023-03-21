import React from "react";
import ReactDOM from "react-dom"; // we used babel in backend and it automatically compiles and we can use modern es6 here

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
            <img src={props.imgsrc} alt="Movie Image" className="card_img"></img>        
            <div class="card-info">              
                <h2 class="card-title">{props.name}</h2>
    
                <a href={props.link} target="_blank" class="btn btn-primary"><button>Watch Now</button></a>
            </div>
        </div>
    </div> 
  </>
  );
}

export default Card;