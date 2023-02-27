import React from "react";
import "./Holidays.css"
import holidays from "../../../Imagenes/Pictures_activities/holidays.png";
import { Link } from 'react-router-dom'

export default function Holidays() {
    return (
        <div>

            <br />
            <div className="card-body">
                <div className="text-img">
                    <h1 className="card-title">Vacaciones de Invierno</h1>

                    <p className="card-text">Las vacaciones de invierno en el MPCN ya constituyen la “temporada alta” de visitas al MPCN y se han instaurado como una de las principales propuestas en General Roca, durante las dos semanas de julio, más de 2000 visitantes de todas las edades y de distintos puntos del país y la provincia disfrutan de las propuestas y actividades del Museo.
                        Los más pequeños exploraron el Rincón Verde, mientras que los más grandes realizan visitas guiadas especiales en el marco del programa “Museo Abierto”, donde pueden observar cómo trabajan los científicos del Museo y acceder a los laboratorios y las colecciones.
                        Así mismo desde el año 2015 ininterrumpidamente de la mano de la Fundación Cultural Patagonia y del IUPA los visitantes disfrutan de los eventos culturales, con las ya tradicionales funciones de títeres que son una de las principales atracciones para grandes y chicos.

                    </p>
                    <br />
                    <img className="holidays-img" src={holidays} alt="holidays" />
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