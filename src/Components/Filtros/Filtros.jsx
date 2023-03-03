import React from "react"
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterEventByPrice, filterEventByCategory, orderByName, getCategories, getEvents } from './../../Actions/AppActions/appActions';
import './../Filtros/Filtros.css'




export default function Filtros({ pageOne }) {
    const dispatch = useDispatch();
    const [setCurrentPage] = useState(1);
    const [continent, setContinent] = useState('All');
    const [order, setOrder] = useState('');
    const [disabled, setDisabled] = useState(false);
    const onChange = (checked) => {
        setDisabled(checked);
    };

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])


    function onClickRadio(e) {
        setContinent(e.target.value)
        if (e.target.value === "All") {
            dispatch(getCategories());
        }
        pageOne(1)
    }

    function onClickRadioOrder(e) {
        setOrder(e.target.value)
        dispatch(orderByName(e.target.value))
        pageOne(1)
    }

    function handleFilterContinent(e) {
        dispatch(filterEventByCategory(e.target.value)); //va a tomar como payload el valor de cada uno de los value de las option del select
        pageOne(1)
    }

    function handleSort(e) {
        setOrder(e.target.value);
        dispatch(orderByName(e.target.value))
        pageOne(1); // cuando hago el ordenamiento lo hago desde la pagina 1, 
        //setOrder(e.target.value) // setOrden es un estado local que en un inicio va a estar vacio, para cuando seteo en la pagina 1, me modifica el estado local y renderiza
    };
    ////////////////////////////////REVISAR




    function handleSortPop(e) {
        e.preventDefault()
        // setOrder(e.target.value);
        dispatch(filterEventByPrice(e.target.value));
        pageOne(1); // cuando hago el ordenamiento lo hago desde la pagina 1, 
        //setOrder(e.target.value) // setOrden es un estado local que en un inicio va a estar vacio, para cuando seteo en la pagina 1, me modifica el estado local y renderiza
    };
    

    return (
        <div className="divContenedor">


            <select
                className="selectFil"
                onChange={(e) => handleFilterContinent(e)}
                defaultValue='All'
            >
                <option value="All" >
                    Todas las Categorias
                </option>
                <option className="opcionFil" value="Social">Social</option>
                <option className="opcionFil" value="Arte">Arte</option>
                <option className="opcionFil" value="Ciencias">Ciencias</option>
                <option className="opcionFil" value="Ecológico">Ecológico</option>
            </select>


            {/*         
            <div className="menu-input-filtro"><input type='radio' checked={continent === 'All' ? true : false} onClick={e => {
                onClickRadio(e);
                dispatch(getEvents(''));
            }}
                onChange={e => handleFilterContinent(e)} value='All' /><p className="menu-p">Todas las categorías</p></div>

            <div className="menu-input-filtro"><input type='radio' checked={continent === 'Social' ? true : false} onClick={e => onClickRadio(e)} onChange={e => handleFilterContinent(e)} value='Social' /><p className="menu-p">Social</p></div>
            <div className="menu-input-filtro"><input type='radio' checked={continent === 'Arte' ? true : false} onClick={e => onClickRadio(e)} onChange={e => handleFilterContinent(e)} value='Arte' /><p className="menu-p">Arte</p></div>
            <div className="menu-input-filtro"> <input type='radio' checked={continent === 'Ciencias' ? true : false} onClick={e => onClickRadio(e)} onChange={e => handleFilterContinent(e)} value='Ciencias' /><p className="menu-p">Ciencias</p> </div>
            <div className="menu-input-filtro"> <input type='radio' checked={continent === 'Ecológico' ? true : false} onClick={e => onClickRadio(e)} onChange={e => handleFilterContinent(e)} value='Ecológico' /><p className="menu-p">Ecológico</p> </div>
           */}
            <select
                className="selectFil"
                onChange={(e) => handleSort(e)}
                defaultValue=''
            >
                <option value="" disabled >Orden Alfabetico</option>
                <option value="asc">Nombres Ascendente</option>
                <option value="desc">Nombres Descendente</option>
            </select>

            <select
                className="selectFil"
                onChange={(e) =>handleSortPop(e)}
                defaultValue='precio'
            >
                <option value='precio' disabled>Orden por Precio</option>
                <option value='max'>Mayor Precio</option>
                <option value='min'>Menor Precio</option>
            </select>

            {/* 
            <div className="menu-input-filtro"><input type='radio' value='asc' checked={order === 'asc' ? true : false} onClick={e => onClickRadioOrder(e)} onChange={e => handleSort(e)} /><p >Nombres ascendente</p></div>
            <div className="menu-input-filtro"><input type='radio' value='desc' checked={order === 'desc' ? true : false} onClick={e => onClickRadioOrder(e)} onChange={e => handleSort(e)} /><p >Nombres descendente</p></div>
            <div className="menu-input-filtro"><input type='radio' value='ascprec' checked={order === 'ascprec' ? true : false} onClick={e => onClickRadioOrder(e)} onChange={e => handleSortPop(e)} /><p >Mayor precio</p></div>
            <div className="menu-input-filtro"><input type='radio' value='descprec' checked={order === 'descprec' ? true : false} onClick={e => onClickRadioOrder(e)} onChange={e => handleSortPop(e)} /><p >Menor precio</p></div>
 */}



        </div>

    )
}
