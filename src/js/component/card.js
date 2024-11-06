import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            <img src={"https://starwars-visualguide.com/assets/img/characters/" + props.uid + ".jpg"} className="card-img-top" alt="Luki" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div> 
                    <Link to={"/single/"+props.uid}> //Vincula a la pagina single con el id de personaje//
                    <button className="btn btn-outline-dark">learn more</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card
