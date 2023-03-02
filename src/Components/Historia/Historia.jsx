import React from 'react';
// import { Col, Row } from 'antd';
// import museo from './../../Imagenes/museo.jpg'
// import firma from './../../Imagenes/firma-museo.jpg'
import './../Historia/Historia.css'
// import { useAuth0 } from "@auth0/auth0-react";
// import { Button } from "antd";



export default function Historia() {

    // const { isAuthenticated, user } = useAuth0();

    return (
        <div className='contenedorHistoria' >
            <div className='bgImg-1' >
                <div className='container-fluid caption'>
                    <h1 className='container-sm'><span className='container-sm badge rounded-5 display-6 card bg-success text-light shadow badgeImagen '>Museo Patagónico de Ciencias Naturales “Juan Carlos Salgado”</span></h1>
                </div>
            </div>

            <div className='container-fluid sectionUno card rounded-5 shadow my-2 containerTextArea' >
                <h3 className=' fw-bold my-3 text-success ' >Historia</h3>
                <div className='container-fluid' >
                    <p className='text-center'>
                        El Museo Patagónico de Ciencias Naturales "Juan Carlos Salgado" (MPCN) es una institución provincial
                        creada por Ley Nº 4077/06 y conforme a la misma es dirigida y administrada por la Fundación Patagónica de
                        Ciencias Naturales (FPCN) de la ciudad de General Roca,
                        provincia de Río Negro, Patagonia, Argentina.
                    </p>
                    <br />
                    <p className='text-center'>
                    El 8 de abril del año 2002 se creó la Fundación Patagónica de Ciencias Naturales, 
                    fundada por Juan Carlos Salgado, Hugo Alberto Chafrat, Jorge Nori, Héctor Piacentini y Armando Gentili, todos vecinos de General Roca, 
                    dedicados a la conservación del patrimonio natural y cultural y el ambiente, con el principal objetivo de crear el Museo Patagónico de Ciencias Naturales.
                    </p>
                    <br />
                    <p className='text-center'>
                    En el año 2006 nace formalmente el Museo Provincial Patagónico de Ciencias Naturales (MPCN) con la promulgación de la 
                    Ley Provincial Nº 4077 de creación del mismo, constituyendo el primer Museo creado por ley en la provincia de Río Negro, 
                    que es dirigido y administrado por la FPCN.
                    </p>
                </div>
            </div>

            <div className='bgImg-2' >
                <div className='caption container-fluid '>
                    <h1><span className='badge rounded-5 display-6 card bg-success text-light shadow badgeImagen '>Ubicacion Estrategica</span></h1>
                </div>
            </div>

            <div className='container-fluid sectionUno card rounded-5 shadow my-2 containerTextArea d-flex ' >
                {/* <h3 className=' fw-bold mb-2' >General Roca</h3> */}
                <div className='container-fluid' >
                    <p className='text-center'>
                    El MPCN destina más de 1.800 m² a la ciencia y educación en el corazón de la ciudad,
                    en el Alto Valle del río Negro.  Emplazado en una región estratégica para el desarrollo productivo y turístico,
                    este museo constituye un importante centro de educación ambiental, investigación y conservación del patrimonio
                    natural y cultural norpatagónico, por el que pasan miles de visitantes anualmente.
                    </p>
                </div>
                <br />
                <div className='container-fluid' >
                    <p className='text-center'>
                    El amplio espacio destinado a las exhibiciones, así como el manejo de las colecciones e instalaciones,
                    posicionan al Museo como uno de los más importantes de la Patagonia Argentina, único en su tipo a nivel
                    provincial tanto por sus dimensiones como por la diversidad de proyectos desarrollados a mediano y largo plazo.
                    </p>
                </div>
            </div>

            <div className='bgImg-3' >
                <div className='caption'>
                    <h1><span className='badge rounded-5 display-6 card bg-success text-light shadow badgeImagen'>Directrices Estrategicas</span></h1>
                </div>
            </div>

            <div className='container-fluid sectionUno card rounded-5 shadow my-2 containerTextArea d-grid h-100' >
                <div className='row' >

                <div className='col-6 h-100' >
                        <h3 className='fw-bold mb-2 text-center w-100 text-success'>Misión</h3>
                        <p className='text-center' >
                            El MPCN tiene como misión generar un espacio para investigar y 
                            difundir las ciencias naturales desde un enfoque regional, promoviendo 
                            la conservación de su vasto patrimonio natural y cultural.
                        </p>
                        <br />
                        <p className='text-center'  >
                            El Museo, a través de sus proyectos y actividades, aporta una visión moderna de la museología: 
                            llega a la sociedad con herramientas de difusión y educación, basadas en fundamentos científicos 
                            y pensando en las necesidades de conservación de la región
                        </p>
                    </div>

                    <div className='col-6 h-100' >
                        <h3 className='fw-bold mb-2 text-center w-100 text-success'>Objetivos</h3>
                        <ul className='container objs text-start h-100'>
                            <li>Conformar un centro de estudios, investigación, información y divulgación científica.</li>
                            <li>Desarrollar proyectos de investigación y difusión desde las disciplinas de paleontología, biología, geología y ciencias ambientales, entre otras. </li>
                            <li>Formar colecciones científicas que representen y resguarden el patrimonio natural y cultural.</li>
                            <li>Realizar exposiciones para difundir la diversidad e importancia del patrimonio.</li>
                            <li>Desarrollar programas de difusión y educación que promuevan la conservación del patrimonio.</li>
                            <li>Generar un ámbito para el análisis, debate y formulación de propuestas en temas científicos y de gestión de recursos naturales y culturales
                            abierto tanto al ámbito gubernamental como académico y público en general.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

