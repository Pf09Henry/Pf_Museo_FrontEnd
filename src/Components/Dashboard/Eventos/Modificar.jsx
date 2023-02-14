import React from 'react';
import { Layout } from 'antd';
import './../Dashboard.css'
import { Content } from 'antd/es/layout/layout';
import Modificar from '../../FormCreacion/ModificarEvento';
import MenuDesplegable from '../Menu-desplegable';




export default function ModificarEvento() {


  return (
    <Layout
    className='layout-dashboard'
      style={{
        minHeight: '250vh',
      }}
    >
    <MenuDesplegable />
    <Content><Modificar/></Content>
    </Layout>
  );
};
