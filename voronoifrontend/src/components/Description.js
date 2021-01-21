import Voronoi from '../images/voronoi_image.png'
export default function Description(props){
    return(
        <>
            <div className={"description"}>
                <div className={"voronoi_image_section"}>
                    <img className={"voronoi_image"} src={Voronoi} alt=""/>
                    <span>Screenshot von unserem Programm</span>
                </div>
                <div className={"paragraph_description"}>
                <p>
                    Im Rahmen des Unterrichts der angewandten Mathematik hatten wir die Möglichkeit das mathematische Vornoi-Diagramm, auch Thiessen-Polygone oder Dirichlet-Zerlegung genannt, in einer Applikation umzuwandeln.
                </p>
                    <p>
                        Das Projekt wurde von zwei IMS-Schüler, <b>Sujenan Thirumamany und Ismail Solombrino</b> realisiert
                    </p>
                    <p>
                        Unser Ziel in dieser Arbeit ist es, eine Benutzeroberfläche zu erstellen, die eine Zahl als Eingabe erhält. Diese Zahl definiert die Anzahl Punkte beziehungsweise die Anzahl Bereiche. Aus Diesen Bereichen aus werden Kreise immer weiter ausgedehnt bis die sich schneiden. Sobald die Kreise sich schneiden, werden die Grenzen durchzogen.
                    </p>
                    <u><b>Was ist Voronoi?</b></u>
                    <p>Als Voronoi-Diagramm, auch Thiessen-Polygone oder Dirichlet-Zerlegung, wird eine <b>Zerlegung des Raumes</b> in Regionen bezeichnet, die durch eine vorgegebene Menge an Punkten des Raumes, hier als Zentren bezeichnet, bestimmt werden.</p>
                </div>
            </div>
        </>
    )
}