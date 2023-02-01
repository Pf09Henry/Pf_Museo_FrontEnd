import React from "react"
import flag from './../../Imagenes/flag.jpg'
import MockUp from './../../Imagenes/MockUp.jpg'
import './../Carrousel/Carrousel.css'

export default function Carrousell(){
  return(
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
            <img src={MockUp} class="img-carrousel d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src={flag} class="img-carrousel d-block w-100" alt="..."/>
            </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
</div>
  )
}