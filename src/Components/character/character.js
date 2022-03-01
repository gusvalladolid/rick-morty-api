import React from "react";
import { Link } from "react-router-dom";
import "./character.css"

const Character = (props) =>{
    const { character } = props
    return(
        <React.Fragment>
                <div class ="container">
                    <div class ="datos_container">
                        <div class ="header">
                            <a href="#">
                            <Link className="Character__image" to={`/character/${character.id}`}>
                  <img  className= "Character__image" src={props.character.image} alt={props.character.name}/> </Link>
                            </a>
                        <h2 className = "Character__name">{props.character.name}</h2>
                        </div>
                        <div class="description">
                        <h2>General Data:</h2>
                        <p className = "Character__species"> Species: {props.character.species}</p>
                        <p className = "Character__status"> Status: {props.character.status}</p>
                        <p>Gender: {props.character.gender}</p>
                        </div>
                        </div>
                    </div>
        </React.Fragment>
    );
};

export default Character;
