import React from "react";
import '../App.css';
import {Link } from "react-router-dom";

const Cards = (props) => {
    return(
        
        
        <div >
          <div className='card'>
            <img className='img' src='../../crewmate.png'></img>
            <h2 className="txt2">Name of CrewMate: {props.name}</h2>
            <h3 className="txt2">Speed of CrewMate: {props.speed}</h3>
            <div className="fle">
            <button className="btn" ><Link className='dis'to={`/crewMates/${props.id}`}> CrewMate Info</Link></button>
            <button className="btn" ><Link className='dis'to={`/update/${props.id}`}> Update CrewMate</Link></button>
            <button className="btn" ><Link className='dis'to={`/delete/${props.id}`}> Delete CrewMate</Link></button>
            </div>
          </div>
        </div>
        
    )
}

export default Cards;