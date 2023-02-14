import React from 'react';
import { Layout  } from 'antd';
import './../Dashboard.css'
import { Content } from 'antd/es/layout/layout';
import CrearGuia from '../../FormCreacion/CrearGuia';
import MenuDesplegable from '../Menu-desplegable';




export default function AgregarGuia() {

  return (
    <Layout
    className='layout-dashboard'
      style={{
        minHeight: '250vh',
      }}
    >
     <MenuDesplegable />
    <Content><CrearGuia/></Content>
    </Layout>
  );
};
