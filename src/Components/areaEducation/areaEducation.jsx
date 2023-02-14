import React from "react";
import "./areaEducation.css"
import course1 from "../../Imagenes/Pictures_areas/course1.jpg";
import school_visits from "../../Imagenes/Pictures_areas/school_visits.jpg";


export default function areaEducation() {
    return (
        <div>

            <br />
            <div className="card-body">
                <h1 className="card-title">Area de Educación</h1>
                <br />
                <p className="card-text">El Área educativa del MPCN, cumple uno de los roles más destacados de la gestión del Museo, se ocupa de la relación del Museo con los distintos niveles educativos de la provincia, de la confección de material pre y pos-visita para docentes y alumnos, la coordinación y atención de los contingentes educativos, el apoyo a otras áreas del Museo para el desarrollo de materiales educativos, expositivos, el desarrollo de propuestas educativas como stands institucionales, muestras itinerantes, desarrollo y supervisión de los contenidos de los programas educativos etc.
                    El Área educativa del Museo también cuenta con un espacio destacado de Educación Ambiental, que se ocupa principalmente de generar material educativo para difusión de redes sociales (Ej. cartillas ambientales, efemérides, semblanzas, apuntes de Educación Ambiental sobre nuestro patrimonio natural y cultural), integrando y unificando esfuerzos en relación al conocimiento de nuestro ambiente y sus recursos naturales, para brindar un aporte fundamental a la elaboración de políticas que conduzcan al desarrollo sustentable. Sin lugar a duda, resultan necesarios más soportes educativos que propendan a difundirlos y a estimular actividades, estudios y formación profesional vinculados a la temática. El MPCN, a través de sus actividades de investigación, educación y de divulgación, pretende constituirse en un soporte fundamental de la tarea.
                    <br />
                    <br />
                    <img className="course1-img" src={course1} alt="course1" />
                </p>

                <div>
                    <h3>Servicios</h3>
                    <li>	Producción de materiales educativos pre y post visita para docentes y alumnos.</li>
                    <li>	Visitas guiadas para escuelas y contingentes educativos y turísticos.</li>
                    <li>	Asesoramiento para proyectos</li>
                    <li>	Biblioteca especializada en ciencias naturales, con especial énfasis en la Patagonia norte.</li>

                    <br />

                    <img className="school_visits-img" src={school_visits} alt="school_visits" />

                    <br />
                    <br />

                    <h3>Actividades educativas y servicios permanentes:  </h3>

                    <li>	Museo Abierto</li>
                    <li>Pequeños Paleontólogos</li>
                    <li>Una Noche en el Museo</li>
                    <li>Taller Sensorial de Biodiversidad</li>
                    <li>Ciclo de Charlas</li>
                    <li>Cursos y Capacitaciones</li>

                    <br />
                </div>
                <button type="button" className="btn btn-outline-success btn-secundario">Compra tu Entrada</button>
                <br />
            </div>
            <br />

        </div >

    )


}