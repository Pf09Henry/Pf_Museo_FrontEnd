import React from 'react';
import { Layout } from 'antd';
import './../Dashboard.css'
import { Content } from 'antd/es/layout/layout';
import Eliminar from '../../FormCreacion/EliminarEvento';
import MenuDesplegable from '../Menu-desplegable';




export default function EliminarEvento() {


  return (
    <Layout
    className='layout-dashboard'
      style={{
        minHeight: '250vh',
      }}
    >
    <MenuDesplegable />
    <Content><Eliminar/></Content>
    </Layout>
  );
};
