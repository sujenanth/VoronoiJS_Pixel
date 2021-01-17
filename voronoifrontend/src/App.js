import logo from './logo.svg';
import './stylesheet.css';
import {Fab} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Description from "./components/Description";

function App() {
  return (
    <div className="App">
        <div className={"block"}>
            <div className={"bigTitle_block"}>
                <h1>Voronoi</h1>
                <span>Ein Gruppenprojekt von zwei IMS-Schülern</span>
            </div>
            <div className={"inline_block"}>
                <h1>Voronoi</h1>
                <p>
                    Im Rahmen des Unterrichts der angewandten Mathematik hatten wir die Möglichkeit das mathematische Vornoi-Diagramm, auch Thiessen-Polygone oder Dirichlet-Zerlegung genannt, in einer Applikation umzuwandeln.
                </p>
                <p>
                    Das Projekt wurde von zwei IMS-Schüler, <b>Sujenan Thirumamany und Ismail Solombrino</b> realisiert
                </p>
            </div>
        </div>
        <div className={"container_description"}>
            <Description/>
        </div>
        <div className={"fab"}>
            <a href="#canvas">
                <Fab color="secondary" aria-label="edit">
                    <PlayArrowIcon/>
                </Fab>
            </a>
        </div>
        <div id={"#canvas"}>
            sss
        </div>
        <footer className={"footer"}>
            &copy; Sujenan Thirumamany & Ismail Solombrino
        </footer>
    </div>
  );
}

export default App;
