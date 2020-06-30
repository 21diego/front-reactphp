import React from "react";
import axios from "axios";


export class ListaNoticia extends React.Component {
	state = {
		noticias: []
	}
	componentDidMount(){
		console.log("entro");
		axios.get('http://localhost:80/noticia/lista')
			.then(res => {
				console.log(res);
				const noticias = res.data;
				this.setState({noticias});

			})

	}

	render(){
		return (
			<table className="table">
				<thead>
					<tr>
						<th>Id</th>
						<th>Titulo</th>
						<th>Seccion</th>
						<th>estado</th>
					</tr>
				</thead>
				<tbody>
				{ this.state.noticias.map(noticia =>
					<tr key={noticia.idnoticia}>
						<td>{noticia.idnoticia}</td>
						<td>{noticia.titulo}</td>
						<td>{noticia.seccion}</td>
						<td>{noticia.estado}</td>
					</tr>
				)}
				</tbody>
			</table>
		);
	}


}