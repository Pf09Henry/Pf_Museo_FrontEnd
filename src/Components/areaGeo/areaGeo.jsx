import React from "react";
import "./areaGeo.css"
import GeologicaUno from "../../Imagenes/Pictures_Geologica/GeologicaUno.jpg";
import GeologicaDos from "../../Imagenes/Pictures_Geologica/GeologicaDos.jpg";
//import dino_sketch from "../../Imagenes/Pictures_areas/dino_sketch.jpg";
import { Link } from 'react-router-dom'



export default function areaGeo() {
    return (
        <div>

            <br />
            <div className="card-body">
                <h1 className="card-title">Area de Geología y Mineralógica</h1>
                <br />
                <p className="card-text">La colección de Geología se compone de las Secciones de Mineralogía y Petrología (MPCN- MyP.) y la Colección Geología Aplicada (MPCN-GA). Fue fundada por la donación de Eduardo Jawerbaum compuesta por Rocas y Minerales de todo el mundo, posteriormente las donaciones de López Bueno y Andrés Oteiza incrementaron las colecciones y el aporte de Mina Capillitas de la donación de un ejemplar de Rodocrosita constituyeron al MPCN en una de las colecciones mineralógicas más importantes de la Patagonia. La colección de Geología fue inicialmente curada por el geólogo Lic. Rubén Barbieri† hasta el 2012. Estas colecciones son incrementadas anualmente por otras donaciones y ejemplares recolectados en los trabajos de campo que realizan todos los años los miembros del MPCN. La Sala de Minerales de la exhibición del Museo es una de las más destacadas y elogiadas por los visitantes nacionales, extranjeros y estudiantes que anualmente visitan el Museo.</p>
                <br />
                <div className="img-card">
                    <img className="fossil1-img" src={GeologicaUno} alt="fossil1" />
                </div>
                <br />

                <p>El 19 de diciembre de 2020.- El Sr. Eduardo Jawerbaum donó una serie de meteoritos a la colección del Museo, creando la Colección de Meteoritos del MPCN. Entre estos se encuentra un meteorito Lunar. Queremos destacar, reconocer y agradecer enormemente a Eduardo Jawerbaum, quien continúa confiando en nosotros para donarnos estos ejemplares que hoy se suman a la 𝐜𝐨𝐥𝐞𝐜𝐜𝐢𝐨́𝐧, como parte del patrimonio natural de todos los rionegrinos.
                </p>
                <br />

                <div>
                    <img className="sketch-img" src={GeologicaDos} alt="sketch-img" />
                    <br />
                    <br />
                    <p>El recorrido del MPCN finaliza en un corredor que muestra los siete hechos geológicos más destacados de la provincia de Río Negro, en ilustraciones realizadas por el artista Jorge González, que recrea los paisajes y la fauna de cada momento de especies presentes en las colecciones del Museo, hasta llegar a General Roca en la actualidad.	</p>
                    <br />
                </div>
                <br />
                <Link to='/entradas'>
                    <button type="button" className="btn btn-outline-success btn-secundario">Compra tu Entrada</button>
                </Link>
                <br />
                <br />
            </div>
            <br />




        </div >
    )


}

