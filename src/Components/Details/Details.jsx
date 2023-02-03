import React from "react";
import { Link } from 'react-router-dom';
import './Details.css'
//import banner_paleo from '../../Imagenes/banner_paleo.jpg'


export default function Exhibits() {
    return (
        <div>
            <div>
                <h1 class="card-title">NOMBRE DE EXHIBICION</h1>
                {/* <img className="banner_paleo" src={banner_paleo} alt="banner_paleo" /> */}

            </div>
            <br />
            <div class="card-body">
                <p class="card-text">El recorrido del MPCN inicia en esta Sala donde se exhiben alrededor de unas 400 piezas fósiles originales, que muestran los procesos de fosilización, la organización de los seres vivos revelando la evolución de la vida contada con fósiles locales, regionales y de otras partes del mundo, la historia geológica del Alto Valle del río Negro y la Patagonia Norte, las sucesivas manifestaciones geológicas que permitieron diversos episodios marinos, entre otros aspectos del pasado remoto. </p>
                <div>
                </div>
                <Link to='/details'>
                    <button type="button" class="btn btn-outline-success btn-secundario">Compra tu Entrada</button>
                </Link>
            </div>


        </div >
    )
}