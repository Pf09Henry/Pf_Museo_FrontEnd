import React from 'react';
import {Carousel} from 'antd';
import { useSelector } from 'react-redux';
import './Carrousel.css'
import { Link } from "react-router-dom";

export default function EventsCarousel() {

    const eventos = useSelector(state => state.eventos).reverse()



  return (
    <div className='container-xl'>
      <Carousel
        autoplay
        draggable
        effect='fade'
        
        style={{
          width:'100%',
          height: '200px',
          overflow: 'hidden',
          marginBottom: '20px',
          borderRadius: '30px'
          }}
      >
        {eventos.map(ev => (
            <div className='container-fluid containerImageCarousel' key={ev.id}>               
                  <Link to={`/event/${ev.id}`}><img className='img-fluid imagenCarouselEventos' src={ev.img} alt="imagenEvento"/></Link>
                <div>
                  <h1 className='tituloeventoCarousel rounded-4'><span className='badge shadow'>{ev.name}</span></h1>              
                </div>
            </div>
          ))}
      </Carousel>
    </div>
  )
}
