import React from 'react'
import './smallevent.css'

export default function SmallEvent (nameEvent){


    return (
        <div className="card  smallevent">
        <div className="row">
          <div className="col">
            <img src="..." className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col">
            <div className="card-body">
              <h5 className="card-title">CardName</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    
            </div>
          </div>
        </div>
      </div>
    )
}