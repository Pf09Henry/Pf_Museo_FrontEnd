import React from 'react';
import { Layout } from 'antd';
import './../Dashboard.css'
import { Content } from 'antd/es/layout/layout';
import ListTicket from './../../Tickets/ListTicket'
import MenuDesplegable from '../Menu-desplegable';



export default function AgregarUsuario() {

  return (
    <Layout
    className='layout-dashboard'
      style={{
        minHeight: '250vh',
      }}
    >

    <MenuDesplegable />
    <Content><ListTicket/></Content>
    </Layout>
  );
};
