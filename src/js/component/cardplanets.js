import React from "react";

const CardPlanets = (props) => { //utilizo operador ternario para solucionar error de la imagen//
    const url = props.uid == 1 ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" : "https://starwars-visualguide.com/assets/img/planets/" + props.uid + ".jpg"
    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            <img src={url} className="card-img-top" alt="planets" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
            </div>
        </div>
    )
}

export default CardPlanets