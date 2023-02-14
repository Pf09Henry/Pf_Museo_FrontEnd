import React from 'react'
import './smallevent.css'

export default function SmallEvent (key, nombre , img){


    return (
        <div className="card  smallevent">
        <div className="row">
          <div className="col">
            <img src={img} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col">
            <div className="card-body">
              <h5 className="card-title">{nombre}</h5>
            </div>
          </div>
        </div>
      </div>
    )
}