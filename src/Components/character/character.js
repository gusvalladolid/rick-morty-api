import React from "react";
import { Link } from "react-router-dom";
import "./character.css"

    Character = (props) =>{
    const { character } = props
    return(
        <React.Fragment>
                <div class ="container">
                    <div class ="datos_container">
                        <div class ="header">
                        <Link  to={`/character/${character.id}`}>
                        <img  src={props.character.image} alt={props.character.name}/> </Link>   
                        <h2>{props.character.name}</h2>
                        </div>
                        <div class="description">
                        <h2>General Data:</h2>
                        <p> Species: {props.character.species}</p>
                        <p> Status: {props.character.status}</p>
                        <p>Gender: {props.character.gender}</p>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
};

export default Character;
