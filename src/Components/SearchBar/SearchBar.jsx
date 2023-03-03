import React from 'react';
import { useState , useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './SearchBar.css';
import { getEventsName } from '../../Actions/AppActions/appActions';
import { Input } from 'antd';


export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
        // 
    }

  /*   function handleSubmit(e) {
        e.preventDefault()
        dispatch(getEventsName(name))
        //setName("")     no borra lo escrito (para facilidad del usuario)
    } */


  useEffect(() => {
        dispatch(getEventsName(name));
      }, [dispatch,name]);

    return (
        <div className='sbcontainer'>
   {/*          <form onSubmit={e => { handleSubmit(e) }}></form> */}
           <p className='buscar-serchbar'>Buscar</p> <Input className='sbinput' onChange={(e) => handleInputChange(e)} type='text' placeholder='Nombre del evento...' value={name} />
       {/*     <button class="btn btn-outline-success btn-search" onClick={(e) => handleSubmit(e)} type='submit'>Buscar</button>  */}
        </div>
    )
}   