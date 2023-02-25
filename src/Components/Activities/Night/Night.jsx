import React from "react";
import "./Night.css"
import night from "../../../Imagenes/Pictures_activities/night.png"
import { Link } from 'react-router-dom'


export default function Night() {
    return (
        <div>

            <br />
            <div className="card-body">
                <div className="text-img">
                    <h1 className="card-title">Una Noche en el Museo</h1>
                    <br />
                    <p className="card-text">Una Noche en el Museo es ya la clásica actividad lúdica y educativa de excelencia del MPCN, exclusiva para niños de 6 a 12 años, cada edición es un éxito en la concurrencia de los niños incluso de provincias vecinas que se maravillan al descubrir jugando todo el fascinante patrimonio natural y cultural de Río Negro. Esta actividad fue ideada por la Lic. Antonela Gorostiague y Luciana García en el año 2012, desde entonces cada año es la actividad con mayor concurrencia, asistiendo niños de otras localidades, incluso de provincias vecinas.
                        Durante el año se realizan diferentes ediciones con distintas temáticas por las que pasan más de 500 niños.
                        .

                    </p>
                    <img className="night-img" src={night} alt="night" />
                </div>

                <br />

                <Link to='/eventos'>
                    <button type="button" className="btn btn-outline-success btn-secundario">Compra tu Entrada</button>
                </Link>
                <br />
                <br />
            </div>
            <br />

        </div >
    )
}