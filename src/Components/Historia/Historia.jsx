import React from 'react';
import { Col, Row } from 'antd';
import museo from './../../Imagenes/museo.jpg'
import firma from './../../Imagenes/firma-museo.jpg'
import './../Historia/Historia.css'
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";



export default function Historia() {

    const { isAuthenticated, user } = useAuth0();

    return (
        <Row className='row-contenedor-historia'>

            <Row >
                <Col span={24} className='titulo-historia'>
                    <h1>Museo Patagónico de Ciencias Naturales “Juan Carlos Salgado” </h1>
                </Col>
            </Row>

            <Row className='row1'>
                <Col className="texto-historia" span={24}>El Museo Patagónico de Ciencias Naturales "Juan Carlos Salgado" (MPCN) es una institución provincial
                    creada por Ley Nº 4077/06 y conforme a la misma es dirigida y administrada por la Fundación Patagónica de
                    Ciencias Naturales (FPCN) de la ciudad de General Roca,
                    provincia de Río Negro, Patagonia, Argentina.
                    <br />
                    La ciudad de General Roca está enclavada en el centro del Alto Valle del río Negro, en un punto
                    neurálgico de la Patagonia Argentina, ubicada en la intersección de las Rutas Nacional Nº 22 y Ruta Nacional Nº 6,
                    es un lugar estratégico en aspectos políticos, económicos, culturales y turísticos con ágiles conexiones viales y
                    aéreas con todo el territorio provincial y nacional.

                </Col>

                <Col span={24}><img className="img-historia" src={museo} alt="..." /></Col>

                <Col className="texto-historia" span={24}>El MPCN destina más de 1.800m² a la ciencia y educación en el corazón de la ciudad, e
                    n el Alto Valle del río Negro.  Emplazado en una región estratégica para el desarrollo productivo y turístico,
                    este museo constituye un importante centro de educación ambiental, investigación y conservación del patrimonio
                    natural y cultural norpatagónico, por el que pasan miles de visitantes anualmente.
                    <br />
                    El amplio espacio destinado a las exhibiciones, así como el manejo de las colecciones e instalaciones,
                    posicionan al Museo como uno de los más importantes de la Patagonia Argentina, único en su tipo a nivel
                    provincial tanto por sus dimensiones como por la diversidad de proyectos desarrollados a mediano y largo plazo.
                </Col>
            </Row>



            <Row className='row2'>
                <Col span={24} className='titulo-historia'>
                    <h3>Historia</h3>
                </Col>
            </Row>

            <Row >
                <Col className="texto-historia" span={24}>El Museo Patagónico de Ciencias Naturales "Juan Carlos Salgado" (MPCN) es una institución provincial
                    creada por Ley Nº 4077/06 y conforme a la misma es dirigida y administrada por la Fundación Patagónica de
                    Ciencias Naturales (FPCN) de la ciudad de General Roca,
                    provincia de Río Negro, Patagonia, Argentina.
                    <br />
                    La ciudad de General Roca está enclavada en el centro del Alto Valle del río Negro, en un punto
                    neurálgico de la Patagonia Argentina, ubicada en la intersección de las Rutas Nacional Nº 22 y Ruta Nacional Nº 6,
                    es un lugar estratégico en aspectos políticos, económicos, culturales y turísticos con ágiles conexiones viales y
                    aéreas con todo el territorio provincial y nacional.
                </Col>

                <Col span={24}><img className="img-historia-2" src={firma} alt="..." /></Col>
            </Row>



            <Row className='row3'>
                <Col span={24} className='titulo-historia '>
                    <h3>Misión y Objetivos</h3>
                </Col>
            </Row>


            <Row>
                <Col className="texto-historia" span={24}>El MPCN tiene como misión generar un espacio para investigar y difundir las
                    ciencias naturales desde un enfoque regional, promoviendo la conservación de su vasto patrimonio natural y cultural.
                    <br />
                    <div className='lista-historia'>
                        <h5>Entre sus objetivos se destacan:</h5>
                        <ul>
                            <li>Conformar un centro de estudios, investigación, información y divulgación científica.</li>
                            <li>Desarrollar proyectos de investigación y difusión desde las disciplinas de paleontología, biología, geología y ciencias ambientales, entre otras. </li>
                            <li>Formar colecciones científicas que representen y resguarden el patrimonio natural y cultural.</li>
                            <li>Realizar exposiciones para difundir la diversidad e importancia del patrimonio.</li>
                            <li>Desarrollar programas de difusión y educación que promuevan la conservación del patrimonio.</li>
                            <li>Generar un ámbito para el análisis, debate y formulación de propuestas en temas científicos y de gestión de recursos naturales y culturales,
                                abierto tanto al ámbito gubernamental como académico y público en general.</li>
                        </ul>
                    </div>
                </Col>
            </Row>



            <Row className='row4'>
                <Col span={24} className='titulo-historia subtitulo-historia'>
                    <h3>Instalaciones</h3>
                </Col>
            </Row>


            <Row>
                <Col className="texto-historia" span={24}>El Museo Provincial Patagónico de Ciencias Naturales “Juan Carlos Salgado”
                    (MPCN) se emplaza en un edificio de más de 1.800m². Constituye el edificio más grande para un museo en la provincia.
                    Diseñado por Carlos Libedinsky y Mario Linder en el año 1971 ganó el concurso organizado por el Estado provincial para
                    elegir la nueva imagen del Banco Provincia y fue terminado de construir en el año 1978, el edificio del MPCN es aún de
                    aspecto moderno, ubicado en pleno centro de la ciudad de General Roca, es, junto al Monumento a la Manzana una postal
                    clásica de la ciudad y el Alto Valle del río Negro.
                </Col>
            </Row>
            <br />
            <Row className='row5'>
                <Col className="texto-historia" span={24}>
                    <div className='lista-historia'>
                        <h6><b>Primer piso:</b></h6>
                        <ul>
                            <li>Hall de Ingreso y Recepción. Con informes turísticos, ascensor y escaleras</li>
                            <li>Exhibición Permanente. Salas de Paleontología, Dinosaurios de Río Negro, Geología, Biodiversidad de la Patagonia Norte, Historia Geológica de la Patagonia Norte.</li>
                            <li>Terraza: donde se realizan los Ciclos "Terraza cultural" además permite realizar actividades educativas, recreativas a cielo abierto.</li>
                        </ul>


                        <h6><b>Segundo piso:</b></h6>
                        <ul>
                            <li>Auditorio: un amplio auditorio para 60 personas, donde se realizan actos, eventos culturales, ciclos de charlas, conferencias, congresos, proyecciones de videos documentales entre otras actividades.</li>
                            <li>Aulas y espacios de usos comunes: Actualmente el IUPA utiliza en el marco de convenios las aulas para los dictados de materias.</li>
                            <li>Depósito.</li>
                            <li>Baños para personal.</li>
                        </ul>

                        <h6><b>Subsuelo </b></h6>
                        <ul>
                            <li>Ala de colecciones: las bóvedas del ex-Banco fueron destinadas y acondicionadas para albergar las colecciones del MPCN.</li>
                            <li>Oficinas: Dirección, Administración, Sala de Reuniones, Área Educativa, Centro de Producción, etc.</li>
                        </ul>

                        {isAuthenticated ? <a className="dropdown-item" href="/socios"><Button className="button__login btn btn-success btn-secundario">Asociate</Button></a> : null}


                    </div>
                </Col>
            </Row>




        </Row>
    );
}

