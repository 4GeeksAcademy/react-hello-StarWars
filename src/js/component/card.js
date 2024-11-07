import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = (props) => {
    const{actions,store}=useContext(Context)
    const isFavorite=store.misFavoritos.includes(props.name)
    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            <img src={"https://starwars-visualguide.com/assets/img/characters/" + props.uid + ".jpg"} className="card-img-top" alt="Luki" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div>
                    <Link to={"/single/" + props.uid}>
                        {/* //Vincula a la pagina single con el id de personaje// */}
                        <button className="btn btn-outline-dark float-start">learn more</button>
                    </Link>
                    <button className="btn btn-outline-warning mx-2 float-end" onClick={()=> actions.favoritos(props.name)}>
                        <i className={`fa fa-heart ${isFavorite? "text-dark":"text-warning"}`}></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
