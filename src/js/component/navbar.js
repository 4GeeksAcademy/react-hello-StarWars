import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.css"

export const Navbar = () => {
	const{store,actions}= useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 titulo p-2">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<div className="nav-item dropdown">
					<a className="nav-link dropdown-toggle"
						href="#" role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false" >
						Favoritos</a>
					<ul className="dropdown-menu" >
						{store.misFavoritos.map((item, id) => (
							<li key={id}>
								<a className="dropdown-item" onClick={() => actions.favoritos(item)}>
									{item} <i class="fa fa-trash float-end"></i></a>
							</li>))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
