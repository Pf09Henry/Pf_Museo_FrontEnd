import React from "react";
import { Link } from 'react-router-dom';
import './Error404.css';

const Error404 = () => {
    return (
        <div className='page-error'>
            <div >
                <h1 className="title">Esta Pagina no esta disponible</h1>
                <Link to='/'>
                    <button type="button" class="btn btn-outline-success btn-secundario">Inicio</button>
                </Link>
            </div>
        </div>
    );
}



export default Error404;