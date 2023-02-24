import React from "react";
import "./areaPaleo.css"
import fossil1 from "../../Imagenes/Pictures_areas/fossil1.jpg";
import fossil2 from "../../Imagenes/Pictures_areas/fossil2.jpg";
import dino_sketch from "../../Imagenes/Pictures_areas/dino_sketch.jpg";
import { Link } from 'react-router-dom'



export default function areaPaleo() {
    return (
        <div>

            <br />
            <div className="card-body">
                <h1 className="card-title">Area de Paleontología</h1>
                <br />
                <p className="card-text">El Área de Paleontología está constituida por jóvenes profesionales, estudiantes y aficionados voluntarios del MPCN. Se ocupa principalmente de conservar, mantener y enriquecer las colecciones del Museo, para lograrlo realiza campañas de recolección y rescate de materiales, prepara y restaura a los mismos en los laboratorios y debidamente catalogados e inventariados los resguarda, previendo siempre cumplir con las legislaciones vigentes en cuanto a la protección del patrimonio tanto del ámbito de la provincia de Río Negro (Ley Nº 3041/96 de protección de patrimonio arqueológico y paleontológico), como del ámbito nacional (Ley Nº 25743/02 de protección del patrimonio arqueológico y paleontológico).

                    En área se desarrolla también tareas de extensión, trabajando en la concientización de los lugareños y pobladores de los campos y regiones ricas en fósiles del vasto territorio de Río Negro, buscando lograr una real conciencia de la importancia de proteger nuestro patrimonio.</p>
                <br />
                <div className="img-card">
                    <img className="fossil1-img" src={fossil1} alt="fossil1" />
                    <img className="fossil2-img" src={fossil2} alt="fossil2" />
                </div>
                <br />

                <p>Se ocupa de mantenerse siempre activa en realizar proyectos de investigación científica que permitan tanto la producción de conocimiento como la divulgación de estos. Para ello trabaja en permanente interrelación con el resto de las áreas del museo, interactúa con otras instituciones y científicos del país y el extranjero en líneas de investigación, principalmente en el fascinante territorio Rionegrino, para la determinación de los materiales hallados y el adecuado manejo de los yacimientos. Trabaja brindando apoyo y asesoramiento a entes gubernamentales y no gubernamentales, colaborando estrechamente con las autoridades del Ministerio de Turismo, Cultura y Deporte, especialmente la Secretaría de Cultura,  Subsecretaría de Patrimonio y la Dirección de Patrimonio y Museos en temas paleontológicos, muestras itinerantes, evaluación de yacimientos, asesoramiento en impacto ambiental y todo lo orientado al cumplimiento de la Ley N° 3041 de Protección del Patrimonio Arqueológico y Paleontológico de Río Negro. Procurando el desarrollo de la paleontología en Río Negro, alentando siempre a los jóvenes cultores de la ciencia. De manera tal que se transforme en una herramienta cultural útil para el desarrollo común en el territorio.
                </p>
                <br />

                <div>
                    <img className="sketch-img" src={dino_sketch} alt="sketch-img" />
                    <br />
                    <br />
                    <h3>Lineas de Trabajo</h3>
                    <li>	Inventario digital y físico de las colecciones paleontológicas del MPCN.</li>
                    <li>	Relevamiento de bibliografía publicada sobre patrimonio paleontológico rionegrino.</li>
                    <li>	Estudio de los reptiles fósiles y la fauna asociada de la Formación Chichinales (Mioceno, Gral. Roca, Río Negro).</li>
                    <li>	Estudio de los invertebrados fósiles del límite Cretácico/Terciario (K/P) de Río Negro.</li>
                    <li>	Estudio del material fósil procedente de la localidad Campo de Fernández, Salitral Moreno y aledaños (Cretácico, Gral. Roca, Río Negro).</li>
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

