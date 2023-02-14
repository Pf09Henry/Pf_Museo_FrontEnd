import React from 'react';
import { Layout} from 'antd';
import './../Dashboard.css'
import { Content } from 'antd/es/layout/layout';
import Modificar from '../../FormCreacion/ModificarCategoria';
import MenuDesplegable from '../Menu-desplegable';




export default function ModificarCategoria() {


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
