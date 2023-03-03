import React from "react";
import { Link } from 'react-router-dom';
import './Exhibits.css'
import paleo from '../../Imagenes/paleo.jpg'
import biodiversidad from '../../Imagenes/biodiversidad.png'
import mineral from '../../Imagenes/mineral.jpg'
import fundador from '../../Imagenes/fundador.jpg'
import geologia from '../../Imagenes/geologia.jpg'


export default function Exhibits() {

    return (
        <div className="exhi"><h1>Nuestras Exhibiciones</h1>
            <br />
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="backgroundDiv">
                        {/* <div className="col-md-4"> */}
                        <img className="card-paleo" src={paleo} alt="paleo" />
                        {/* </div> */}
                        <div className="card-body">
                            <h5 className="card-title" >Paleontologia</h5>
                            <p className="card-text">El recorrido del MPCN inicia en esta Sala donde se exhiben alrededor de unas 400 piezas fósiles originales, que muestran los procesos de fosilización, la organización de los seres vivos revelando la evolución de la vida contada con fósiles locales, regionales y de otras partes del mundo, la historia geológica del Alto Valle del río Negro y la Patagonia Norte, las sucesivas manifestaciones geológicas que permitieron diversos episodios marinos, entre otros aspectos del pasado remoto. </p>
                            <div>
                                <Link to='/entradas'>
                                    <button type="button" className="btn btn-outline-success btn-secundario">Visitanos</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            < div className="card mb-3" >
                <div className="row g-0">
                    <div className="backgroundDiv">
                        {/* <div className="col-md-4"> */}
                        <img className="card-mineral" src={mineral} alt="mineral" />
                        {/* </div> */}
                        <div className="card-body">
                            <h5 className="card-title">Geología</h5>
                            <p className="card-text">La Sala de Geología y Minerales es una de las más destacadas y elogiadas por los visitantes. Las vitrinas cuentan cómo se forman los minerales, sistemas cristalinos y los distintos tipos de rocas, en una muestra de gran belleza por la calidad de los minerales y rocas expuestas, entre las piezas más destacadas hay una muestra de rodocrosita (mineral nacional), una pepita de oro, un diamante, entre muchas otras que son de extremada belleza. </p>
                            <div>
                                <Link to='/entradas'>
                                    <button type="button" className="btn btn-outline-success btn-secundario">Visitanos</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >



            <div id='BZZ' className="card mb-3 bio" >
                <div className="row g-0">
                    <div className="backgroundDiv">
                        {/* <div className="col-md-4"> */}
                        <img className="card-bio" src={biodiversidad} alt="biodiversidad" />
                        {/* </div> */}
                        <div className="card-body">
                            <h5 className="card-title">Biodiversidad</h5>
                            <p className="card-text">La Sala de Biodiversidad muestra los distintos ambientes y hábitats que se encuentran, las especies más representativas, relaciones intra e interespecíficas, status de conservación, el origen,  la  conservación del ambiente, entre otros datos para el conocimiento sobre la biodiversidad de esta región. Persiguiendo un fin de conservación, las especies de vertebrados recreadas en fotografías a tamaño natural y la sala se ambientó con sonidos de la naturaleza.</p>
                            <div>
                                <Link to='/entradas'>
                                    <button type="button" className="btn btn-outline-success btn-secundario">Visitanos</button>
                                </Link>
                            </div >
                        </div>
                    </div>
                </div>
            </div>



            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="backgroundDiv">
                        {/* <div className="col-md-4"> */}
                        <img className="card-geologia" src={geologia} alt="geologia" />
                        {/* </div> */}
                        <div className="card-body">
                            <h5 className="card-title">Historia Geologíca</h5>
                            <p className="card-text">En esta muestra se aprecian los siete hechos geológicos más destacados de la provincia de Río Negro, en ilustraciones realizadas por el artista Jorge González, que recrea los paisajes y la fauna de cada momento de especies presentes en las colecciones del Museo, hasta llegar a General Roca en la actualidad.
                            </p>
                            <div>
                                <Link to='/entradas'>
                                    <button type="button" className="btn btn-outline-success btn-secundario">Visitanos</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="backgroundDiv">
                        {/* <div className="col-md-4"> */}
                        <img className="card-fundador" src={fundador} alt="fundador" />
                        {/* </div> */}
                        <div className="card-body">
                            <h5 className="card-title">Homenaje a Nuestro Creador</h5>
                            <p className="card-text">La exposición en homenaje al creador del museo Juan Carlos Salgado es una exhibición única que rinde tributo al visionario y pionero del mundo museístico, Juan Carlos Salgado. Este evento, que se lleva a cabo en el propio museo fundado por él, ofrece una mirada detallada a la vida y legado de Juan Carlos Salgado a través de una amplia variedad de objetos y materiales históricos, incluyendo fotografías, documentos y objetos relacionados con su carrera y su visión para el museo. Con esta exposición, se espera celebrar la importancia del liderazgo y la dedicación de Juan Carlos Salgado al mundo museístico y a la preservación de la historia y la cultura para las generaciones futuras. Sin duda, es una oportunidad única para los visitantes de aprender sobre la vida y obra de una de las figuras más influyentes en el mundo museístico.</p>
                            <div>
                                <Link to='/entradas'>
                                    <button type="button" className="btn btn-outline-success btn-secundario">Visitanos</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    )
}