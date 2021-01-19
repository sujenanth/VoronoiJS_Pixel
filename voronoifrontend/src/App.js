import logo from './logo.svg';
import './stylesheet.css';
import {Fab} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Description from "./components/Description";
import CanvasContainer from "./components/CanvasContainer";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Script from 'react-load-script';
import ScriptTag from 'react-script-tag';


function App() {
  return (
    <div className="App">
        <div className={"block"}>
            <ScrollAnimation animateOnce animateIn={"fadeIn"} animateOut={"fadeOut"} className={"bigTitle_block"}>
                <h1>Voronoi</h1>
                <span>Ein Gruppenprojekt von zwei IMS-Schülern</span>
            </ScrollAnimation>
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
            <CanvasContainer/>
        </div>
        <div className={"fab"}>
            <a href="#voronoi_canvas">
                <Fab size={"large"} color="secondary" aria-label="edit">
                    <PlayArrowIcon/>
                </Fab>
            </a>
        </div>
        <footer className={"footer"}>
            &copy; Sujenan Thirumamany & Ismail Solombrino
        </footer>
    </div>
  );
}

export default App;
