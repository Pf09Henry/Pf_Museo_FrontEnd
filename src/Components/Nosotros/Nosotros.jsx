import React from 'react'
import AboutButtons from '../AboutButton/AboutButton'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Contacto from '../Contacto/Form.jsx';



const Nosotros = () => {

  return (
    
    <div>
         <AboutButtons/>
    <h2>Contactanos</h2>     <Contacto/>
         
    </div>
       )
}

export default Nosotros