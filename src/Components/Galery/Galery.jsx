import React from 'react'
import firstFosil from '../../Imagenes/Pictures_fossils/11141176_1388503954810254_6766559355664383940_n.jpg'
import secondFossil from '../../Imagenes/Pictures_fossils/11150797_1388503958143587_6379536166773550118_n.jpg'
import thirdFossil from '../../Imagenes/Pictures_fossils/11150985_1388503968143586_7186187433338961869_n.jpg'
import quarterFossil from '../../Imagenes/Pictures_fossils/11169894_1388514084809241_3746121650345625550_n.jpg'
import fifthFossil from '../../Imagenes/Pictures_fossils/21781_1388503961476920_3385225933583331405_n.jpg'
import bio1 from '../../Imagenes/Pictures_Biologia/LaboratorioBiodiversidad.jpg'
import bio2 from '../../Imagenes/Pictures_Biologia/BiologiaUno.jpg'
import bio3 from '../../Imagenes/Pictures_Biologia/BiologiaTres.jpg'
import bio4 from '../../Imagenes/Pictures_Biologia/BiologiaSiete.jpg'
import bio5 from '../../Imagenes/Pictures_Biologia/BiologiaDos.jpg'
import geo1 from '../../Imagenes/Pictures_Geologica/Exploracion.jpg'
import geo2 from '../../Imagenes/Pictures_Geologica/GeologicaTres.jpg'
import geo3 from '../../Imagenes/Pictures_Geologica/GeologicaCuatro.jpg'
import geo4 from '../../Imagenes/Pictures_Geologica/GeologicaUno.jpg'
import geo5 from '../../Imagenes/Pictures_Geologica/GeologicaDos.jpg'
import './Styles/Galery.css'
import { Link } from 'react-router-dom'

export default function Galery() {



  return (
    <div>
      {/* Area Palenteologia */}
      <section className='container-fluid align-items-center justify-content-center titleSection '>
        <a href="/areaPaleo" className='text-dark text-decoration-none' ><h2 className='text-center' >Sala de Paleontología</h2><i></i></a>
      </section>
      <section>
        <img src={firstFosil} alt="logo" />
        <img src={secondFossil} alt="Trex" />
        <img src={thirdFossil} alt="Trex" />
        <img src={quarterFossil} alt="Trex" />
        <img src={fifthFossil} alt="Trex" />
      </section>
      {/* Area Biologica */}
      <section className='container-fluid align-items-center justify-content-center titleSection '>
        <a href="/areaBio" className='text-dark text-decoration-none font-weight-bold '> <h2 className='text-center' >Sala de Biodiversidad</h2><i></i></a>
      </section>
      <section>
        <img src={bio1} alt="logo" />
        <img src={bio2} alt="Trex" />
        <img src={bio3} alt="Trex" />
        <img src={bio4} alt="Trex" />
        <img src={bio5} alt="Trex" />
      </section>
      {/* Area Geologia */}
      <section className='container-fluid align-items-center justify-content-center titleSection '>
        <a href="/areaGeo" className='text-dark text-decoration-none font-weight-bold '> <h2 className='text-center' >Sala de Geología</h2><i></i></a>
      </section>
      <section>
        <img src={geo1} alt="logo" />
        <img src={geo2} alt="Trex" />
        <img src={geo3} alt="Trex" />
        <img src={geo4} alt="Trex" />
        <img src={geo5} alt="Trex" />
      </section>
    </div>
  )
}
