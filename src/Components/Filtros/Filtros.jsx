import React from "react"
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterEventByPrice, filterEventByCategory, orderByName, getCategories } from './../../Actions/AppActions/appActions';
import './../Filtros/Filtros.css'


export default function Filtros() {
    const dispatch = useDispatch(); //////////////////////////////////////
    const eventos = useSelector((state) => state.eventos); //////////////////////////////////////
    //const [orden, setOrden] = useState('');
    const [currentPage, setCurrentPage] = useState(1);/////////////////////
    //const countriesPerPage = 9;
    //const indexOfLastCountry = currentPage * countriesPerPage;
    //const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    //const currentEvents = eventos.slice(indexOfFirstCountry, indexOfLastCountry);
    const [continent, setContinent] = useState('All');
    const [order, setOrder] = useState('');
    const Categorias = useSelector((state) => state.categorias);


    function onClickRadio(e) {
        setContinent(e.target.value)
    }

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])


    function onClickRadioOrder(e) {
        setOrder(e.target.value)
    }


    function handleFilterContinent(e) {
        dispatch(filterEventByCategory(e.target.value)); //va a tomar como payload el valor de cada uno de los value de las option del select
    }



    function handleSort(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1); // cuando hago el ordenamiento lo hago desde la pagina 1, 
        setOrder(e.target.value) // setOrden es un estado local que en un inicio va a estar vacio, para cuando seteo en la pagina 1, me modifica el estado local y renderiza
    };
    ////////////////////////////////REVISAR

    function handleSortPop(e) {
        e.preventDefault();
        dispatch(filterEventByPrice(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value)
    };

    ////////////////////////////

    // function handleSortPop(e) {
    //     dispatch(filterEventByPrice(e.target.value));
    //     setCurrentPage(1); // cuando hago el ordenamiento lo hago desde la pagina 1, 
    //     setOrder(e.target.value) // setOrden es un estado local que en un inicio va a estar vacio, para cuando seteo en la pagina 1, me modifica el estado local y renderiza
    // };


    /*      //tengo que guardar en mi estado local, lo que vaya apareciendo en el input 
     function handleInputChange(e) {
             e.preventDefault();
             setName(e.target.value);
             
     } 
     
     
         const handleSubmit = (e) => {
             e.preventDefault();
             setName(e.target.value);
           }; */

    return (
        <div className="menudefiltros">

            {/* <div className='col-md-8 filtrado'> */}
            {/* <div className="categoria"> */}
            {/* <div><p className="menu-title">Filtro por categoría</p></div> */}
            <div className="menu-input-filtro"><input type='radio' checked={continent === 'All' ? true : false} onClick={e => onClickRadio(e)} onChange={e => handleFilterContinent(e)} value='All' /><p className="menu-p">Todas las categorías</p></div>
            <div className="menu-input-filtro"><input type='radio' checked={continent === 'Social' ? true : false} onClick={e => onClickRadio(e)} onChange={e => handleFilterContinent(e)} value='Social' /><p className="menu-p">Social</p></div>
            <div className="menu-input-filtro"><input type='radio' checked={continent === 'Arte' ? true : false} onClick={e => onClickRadio(e)} onChange={e => handleFilterContinent(e)} value='Arte' /><p className="menu-p">Arte</p></div>
            <div className="menu-input-filtro"> <input type='radio' checked={continent === 'Ciencias' ? true : false} onClick={e => onClickRadio(e)} onChange={e => handleFilterContinent(e)} value='Ciencias' /><p className="menu-p">Ciencias</p> </div>
            <div className="menu-input-filtro"> <input type='radio' checked={continent === 'Ecológico' ? true : false} onClick={e => onClickRadio(e)} onChange={e => handleFilterContinent(e)} value='Ecológico' /><p className="menu-p">Ecológico</p> </div>
            {/* </div>

            <div className="nombre"> */}
            {/* <p className="menu-title">Filtros ordenamiento</p> */}
            <div className="menu-input-filtro"><input type='radio' value='asc' checked={order === 'asc' ? true : false} onClick={e => onClickRadioOrder(e)} onChange={e => handleSort(e)} /><p >Nombres ascendente</p></div>
            <div className="menu-input-filtro"><input type='radio' value='desc' checked={order === 'desc' ? true : false} onClick={e => onClickRadioOrder(e)} onChange={e => handleSort(e)} /><p >Nombres descendente</p></div>
            <div className="menu-input-filtro"><input type='radio' value='ascprec' checked={order === 'ascprec' ? true : false} onClick={e => onClickRadioOrder(e)} onChange={e => handleSortPop(e)} /><p >Mayor precio</p></div>
            <div className="menu-input-filtro"><input type='radio' value='descprec' checked={order === 'descprec' ? true : false} onClick={e => onClickRadioOrder(e)} onChange={e => handleSortPop(e)} /><p >Menor precio</p></div>
            {/* </div> */}

        </div>

    )
}
