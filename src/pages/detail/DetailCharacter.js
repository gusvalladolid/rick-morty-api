import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import Http from "../../lib/request";
import "./Detail.css"

const DetailCharacter = () =>{
    const { id } = useParams();
    const [character, setCharacter] = useState({})
    const [origin, setOrigin] = useState({})
    const [location, setLocation] = useState({})

    useEffect(()=>{
        const fetchCharacter = async ( ) =>{
            const character = await Http.instance.get_character(id);
            setCharacter(character)
            setOrigin(character.origin)
            setLocation(character.location)
        }
        fetchCharacter();
    },[id])

    return (    
    <React.Fragment>
    <React.Fragment>

            <div class ="container2">
                    <div class ="datos_container2">
                        <div class ="header2">
                        <h1>{character.name}</h1>
                        <div class="hola">
                        <img src={character.image} alt={character.name} />
                        </div>
                        </div>
                        <div class="description">
                        <h1>Character data</h1>
                        <p><h3>Status: </h3> {character.status}</p>
                        <p><h3>Specie: </h3> {character.species}</p>
                        <p><h3>Type: </h3> {character.type || "NA"}</p>
                        <p><h3>Gender: </h3> {character.gender}</p>
                        <p><h3>Origin: </h3> {origin.name}</p>
                        <p><h3>Location: </h3> {location.name}</p>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    </React.Fragment>
    );
};

export default DetailCharacter;
