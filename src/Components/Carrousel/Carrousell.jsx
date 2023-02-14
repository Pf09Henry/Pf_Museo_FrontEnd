import React from "react"
import flag from './../../Imagenes/flag.jpg'
import MockUp from './../../Imagenes/MockUp.jpg'
import './../Carrousel/Carrousel.css'

export default function Carrousell(){
  return(
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
            <img src={MockUp} className="img-carrousel d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <img src={flag} className="img-carrousel d-block w-100" alt="..."/>
            </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
</div>
  )
}