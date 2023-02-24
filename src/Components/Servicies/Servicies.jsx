import React from 'react'
import {GrWifi} from 'react-icons/gr'
import {BiLandscape, BiAccessibility} from 'react-icons/bi'
import {RiBookMarkFill, RiGuideFill} from 'react-icons/ri'
import  {MdBabyChangingStation, MdEventSeat, MdOutlineRememberMe, MdCastForEducation, MdOutlineLocalGroceryStore, MdTour, MdClass} from 'react-icons/md'
import {GiClothes, GiFirstAidKit, GiTalk, GiWalkingBoot } from 'react-icons/gi'
// import {GiDinosaurBones, GiLion, GiAmmoniteFossil, GiSauropodSkeleton, GiSquid } from 'react-icons/gi'
import { RxActivityLog } from 'react-icons/rx'
import {SiFossilscm } from 'react-icons/si'
import './Styles/Services.css'

export default function Servicies() {
  return (

<div className='d-grid row position-relative overflow-hidden p-2 p-lg-4 m-md-2 text-center ' >
  <h1 className="display-3 fw-normal">Servicios</h1>
<div className='row'>
  <div className="col-6">
  
    <div className=" me-md-3 pt-2 px-3 pt-md-4 px-md-4 text-center overflow-hidden ">
        {/* <div className="my-3 py-3 fs-4  "> */}
        <h6 className="display-6 fw-normal">Fisicos</h6>
        <ul class="list-group border shadow-lg">
          <li className='list-group-item'><GrWifi size={25}/> Wi-Fi</li>
          <li className='list-group-item '><MdOutlineLocalGroceryStore size={25}/> Tienda</li>  
          <li className='list-group-item' ><RiBookMarkFill size={25}/> biblioteca</li>
          <li className='list-group-item'><MdEventSeat size={25}/> Auditórium</li>
          <li className='list-group-item '><GiClothes size={25}/> Guardarropa</li>
          <li className='list-group-item'> <BiLandscape size={25}/> Áreas de descanso </li>
          <li className='list-group-item'><RiGuideFill size={25}/> Visitas Guiadas</li>
          <li className='list-group-item'><BiAccessibility size={25}/> Rampas de Acceso</li>
          <li className='list-group-item'><MdBabyChangingStation size={25}/> Cambiador para bebes</li>
          
        </ul>
        {/* </div> */}
      </div>
  
    
  </div>
  <div className="col-6">
    <div className=" me-md-3 pt-2 px-2 pt-md-4 px-md-4 text-center overflow-hidden rounded">
      {/* <div className="my-2 py-2 fs-4"> */}
      <h6 className="display-6 fw-normal">Culturales</h6>
      <ul className="list-group border shadow-lg ">
        <li className='list-group-item list-group-item-dark'><MdClass/> Cursos</li>
        <li className='list-group-item list-group-item-dark'><GiTalk size={25}/> Charlas</li>
        <li className='list-group-item list-group-item-dark'><MdOutlineRememberMe size={25}/> Membresía</li>
        <li className='list-group-item list-group-item-dark'><MdTour size={25}/> Informes Turísticos	</li>        
        <li className='list-group-item list-group-item-dark'><GiFirstAidKit size={25}/> Primeros Auxilios</li>
        <li className='list-group-item list-group-item-dark'><MdCastForEducation size={25}/> Actividades Educativas</li>
        <li className='list-group-item list-group-item-dark'><RxActivityLog size={25}/> Actividades Culturales</li>
        <li className='list-group-item list-group-item-dark'><GiWalkingBoot size={25}/> Interpretación de la Naturaleza</li> 
        <li className='list-group-item list-group-item-dark'><SiFossilscm size={25}/> Preparación y determinación de especímenes	</li>
      </ul>
      {/* </div> */}
    </div>
  </div>
</div>

</div>

        /* <li><GiDinosaurBones/>Dinosaur</li>
        <li><GiLion/>Leon</li>
        <li><GiAmmoniteFossil/>Fossil</li>
        <li><GiSauropodSkeleton/>skeleton Dinosaur</li>
        <li><GiSquid/>Pulpo</li> */

  )
}
