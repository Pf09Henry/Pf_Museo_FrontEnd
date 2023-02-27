import React from "react";
import { Spin } from "antd";
import './Spin.css'


export default function SpinPage(){
    return(
        
        <div className="spingPage">
           
            <Spin size="large" className="spin-large" />
            <p>Cargando...</p>
        
        </div>
    )
}