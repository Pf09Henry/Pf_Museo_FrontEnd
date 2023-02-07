import React from "react";
import { Pagination } from 'antd';



export default function Paginado({ currentEvents, eventos, currentPage,setCurrentPage }){


    const pageNumbers = [];
    const pageSecToFinish = eventos ;
    pageNumbers.push(1);
   
    

    for (let i=2; i<=Math.ceil(pageSecToFinish/5); i++) {
        pageNumbers.push(i);
    }

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber);
      
    }



    return(
        <div className="paginado-conteiner">

        <Pagination defaultCurrent={paginated} total={pageSecToFinish} />;
            
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
            
        </div>
    )
}