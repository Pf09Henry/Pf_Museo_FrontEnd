import React  from 'react';
import { Layout } from 'antd';
import './../Dashboard.css'
import { Content } from 'antd/es/layout/layout';
import ModificarComentario from '../../FormCreacion/ModificarComentario';
import MenuDesplegable from '../Menu-desplegable';




export default function Modificar() {


  return (
    <Layout
    className='layout-dashboard'
      style={{
        minHeight: '250vh',
      }}
    >
  
    <MenuDesplegable />
    <Content><ModificarComentario/></Content>
    </Layout>
  );
};
