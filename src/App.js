import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Home } from "./components/Home.js";
import { Navbar } from "./components/Navbar";
import { ListaNoticia} from "./components/ListaNoticia";
import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/lista-noticias">
						<div>Lista de noticias</div>
						<ListaNoticia />
					</Route>
				</Switch>

			</Router>
		</div>
	);
}

export default App;
