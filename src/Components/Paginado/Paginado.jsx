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



//export default function Paginado({ currentEvents, eventos, currentPage,setCurrentPage }){


//     const pageNumbers = [];
//     const pageSecToFinish = eventos ;
//     pageNumbers.push(1);



//     for (let i=2; i<=Math.ceil(pageSecToFinish/5); i++) {
//         pageNumbers.push(i);
//     }

//     const paginated = (pageNumber) => {
//         setCurrentPage(pageNumber);

//     }



//     return(
//         <div className="paginado-conteiner">

//         <Pagination defaultCurrent={paginated} total={pageSecToFinish} />;

{/*  <ul className="paginado-clase">
            <button className="boton-paginado" onClick={() =>
                 pageNumbers && 
                 paginated(currentPage-1)}>{'<<'}</button> 
                { pageNumbers && 
                pageNumbers.map(n => (
                    <li className='number' key={n}>      
                        
                        <button className="boton-paginado" onClick={() => 
                            pageNumbers.length>0 && 
                            paginated(n)}>{n}</button> 
                       
                    </li> 
                ))}
                 <button className="boton-paginado"  onClick={() => 
                    pageNumbers && paginated(currentPage+1)}>{'>>'}</button> 
            </ul> */}

//         </div >
//     )
// }