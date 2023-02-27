import React from "react";
import './Paginado.css'
//import { Pagination } from 'antd';



export default function Pagination({
    eventsPerPage,
    eventos,
    pagination,
    currentPage,
}) {
    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(eventos / eventsPerPage); i++) {
        pageNumbers.push(i + 1);
    }

    return (
        <div className='container'>
            {/* prev */}
            {pageNumbers && currentPage > 1 ? (
                <button
                    className='navigate'
                    onClick={() => pagination(currentPage - 1)}
                ></button>
            ) : null}

            {/* intermedio */}
            {pageNumbers && pageNumbers.map((n) => {
                return (
                    <button
                        className={currentPage === n ? 'pageSelected' : 'page'}
                        key={n}
                        onClick={() => pagination(n)}
                    >
                        {n}
                    </button>
                );
            })}
            {/* Next */}
            {pageNumbers && currentPage <= pageNumbers.length - 1 ? (
                <button
                    className='navigate'
                    onClick={() => pagination(currentPage + 1)}
                ></button>
            ) : null}
        </div>
    );

};

