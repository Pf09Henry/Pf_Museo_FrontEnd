import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './SearchBar.css';
import { getEventsName } from '../../Actions/AppActions/appActions';

export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
        // console.log(name)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getEventsName(name))
        //setName("")     no borra lo escrito (para facilidad del usuario)
    }

    return (
        <div className='sbcontainer'>
            <form onSubmit={e => { handleSubmit(e) }}></form>
            <input className='sbinput' onChange={(e) => handleInputChange(e)} type='text' placeholder='buscar evento...' value={name} />
            <button class="btn btn-outline-success btn-search" onClick={(e) => handleSubmit(e)} type='submit'>Buscar</button>
        </div>
    )
}