
import React from "react";
import "./Culture.css"
import culture from "../../../Imagenes/Pictures_activities/culture.png";
import { Link } from 'react-router-dom';

export default function Culture() {
    return (
        <div>

            <br />
            <div className="card-body">
                <div className="text-img">
                    <h1 className="card-title">Ciclos Culturales</h1>
                    <br />
                    <p className="card-text">Como todos los años, el museo se concibe como un espacio multicultural, por ello se desarrollan actividades culturales organizadas tanto por el la FPCN y el MPCN, como por los artistas independientes o instituciones (IUPA y Fundación Cultural Patagonia) usando el MPCN para canalizar sus inquietudes artísticas y mostrar el resultado de su trabajo, instaurando al Museo como un centro multicultural de gran atractivo.
                        Terraza Cultural es un ciclo de eventos y presentaciones de bandas locales y regionales en vivo en el patio del MPCN, cada evento acompañado de degustaciones de cerveza artesanal regional y de gastronomía, generando una alternativa cultural de gran concurrencia.
                    </p>
                    <img className="culture-img" src={culture} alt="culture" />
                </div>

                <br />

                <Link to='/eventos'>
                    <button type="button" className="btn btn-outline-success btn-secundario">Compra tu Entrada</button>
                </Link>
            </div>
            <br />

        </div >
    )
}