import React from "react";
import "./areaBio.css"
import yarara from "../../Imagenes/Pictures_areas/yarara.jpg";
import investigation from "../../Imagenes/Pictures_areas/investigation.jpg";
import { Link } from 'react-router-dom'


export default function areaBio() {



    return (
        <div>

            <br />
            <div className="card-body">
                <div className="text-img">
                    <h1 className="card-title">Area de Biodiversidad</h1>
                    <br />
                    <p className="card-text">Constituido por un equipo profesional multidisciplinario formado por biólogos, agrónomos y naturalistas es un área del MPCN que trabaja en investigación, divulgación y conservación de la vida silvestre norpatagónica.
                        También tiene por objetivos incrementar las colecciones biológicas del MPCN, determinar especímenes, describir nuevas especies, apoyar a otras áreas del Museo en la generación de textos y la preparación de una base de fotografías sistematizadas de flora, fauna y ambientes de la Patagonia.
                        Asesoramos a organismos públicos y privados sobre temas de conservación, realizamos determinaciones taxonómicas, monitoreos de biodiversidad, presencia y ausencia de especies de interés sanitario, dictamos capacitaciones sobre fauna e interpretación de la naturaleza, entre otros temas.
                        En el laboratorio se trabaja en estudios sobre; morfología, sistemática, taxonomía, genética, anatomía comparada, educación, estudios ecológicos, estudios sobre cambio climático, filogeografía, taxonomía, biogeografía y evolución. Además de muestreo, etiquetado, acondicionamiento de ejemplares y el preparado de materiales para la colección y las exhibiciones del Museo.
                    </p>
                    <img className="investigation-img" src={investigation} alt="investigation" />
                </div>


                <br />

                <div>
                    <h3>Lineas de Trabajo</h3>
                    <li>	Herpetología: respecto de los reptiles y anfibios del territorio rionegrino, se realizan trabajos de determinación y descripción de especies, análisis de relaciones filogenéticas y resguardo genético. Complementariamente se diseña y distribuye material de difusión y se brinda asesoramiento gratuito a clínicas y hospitales para la determinación de ejemplares de interés sanitario.</li>
                    <li>	Mastozoología: se realizan trabajos de determinación y descripción de especies, análisis de relaciones filogenéticas y resguardo genético, se preparan colecciones de pieles y esqueletos. se desarrollan estudios para comprender la biología y ecología de micromamíferos y carnívoros de la región, complementadas con campañas de concientización en escuelas y medios de comunicación sobre el rol ecológico de las especies consideradas plagas para la ganadería (puma, zorro gris y colorado).</li>
                    <li>	Ornitología: se trabaja en censos y relevamientos de aves en diversos ambientes del centro y norte de la provincia de Río Negro. Se está creando la colección oológica, osteológica y de pieles, sobre todo con ejemplares hallados muertos en las rutas. </li>
                    <li>	Entomología: se trabaja en taxonomía y sistemática de insectos de Patagonia, en especial en determinar la presencia o ausencia de aquellos de interés agrícola, en el incremento de las colecciones, así como en la revisión, curación y puesta en valor de la colección entomológica del MPCN. Se prestan servicios a otras instituciones, preparando ejemplares y determinando especímenes.</li>
                    <li>	Botánica: se continuó con el registro fotográfico de flora silvestre rionegrina, material disponible para futuros estudios de distribución y programas educativos, se trabaja en la confección de una guía de campo y se prevé comenzar el herbario en 2021.</li>
                    <li>Banco de imágenes: se amplió el archivo digital, superando las 150.700 imágenes de vida silvestre y ambientes patagónicos.</li>

                    <br />

                    <div className="img-card">
                        <img className="yarara-img" src={yarara} alt="yarara" />
                        {/* <img className="fossil2-img" src={fossil2} alt="fossil2" /> */}
                    </div>

                    <br />

                </div>
                <Link to='/entradas'>
                    <button type="button" className="btn btn-outline-success btn-secundario">Compra tu Entrada</button>
                </Link>
            </div>
            <br />

        </div >
    )


}