import React from 'react'
import firstFosil from '../../Imagenes/Pictures_fossils/11141176_1388503954810254_6766559355664383940_n.jpg'
import secondFossil from '../../Imagenes/Pictures_fossils/11150797_1388503958143587_6379536166773550118_n.jpg'
import thirdFossil from '../../Imagenes/Pictures_fossils/11150985_1388503968143586_7186187433338961869_n.jpg'
import quarterFossil from '../../Imagenes/Pictures_fossils/11169894_1388514084809241_3746121650345625550_n.jpg'
import fifthFossil from '../../Imagenes/Pictures_fossils/21781_1388503961476920_3385225933583331405_n.jpg'


import './Styles/Galery.css'

export default function Galery() {
  return (
    <div>
      <section className='container-sm align-items-center justify-content-center '>
        <h2 className='text-center' >Palentologia</h2>
      </section>
    <section>
        <img src= {firstFosil} alt="logo" />
        <img src={secondFossil} alt="Trex" />
        <img src={thirdFossil} alt="Trex" />
        <img src={quarterFossil} alt="Trex" />
        <img src={fifthFossil} alt="Trex" />
    </section>
    </div>
  )
}
