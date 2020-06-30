import React from "react";
import { Link } from "react-router-dom";



export function Navbar() {
	return(
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<button>
							<i className="fa fa-user" aria-hidden="true">Nombre Usuario</i>
						</button>
					</li>
					<li className="nav-item"><Link to="/home" className="nav-link" >Home</Link></li>
					<li className="nav-item"><Link to="/lista-noticias" className="nav-link" >lista noticias</Link></li>
				</ul>
			</div>
		</nav>
	);
}