import React  from 'react';
import { Layout} from 'antd';
import './../Dashboard.css'
import { Content } from 'antd/es/layout/layout';
import CrearCategoria from '../../FormCreacion/CrearCategoria';
import MenuDesplegable from '../Menu-desplegable';






export default function AgregarCategoria() {

  return (
    <Layout
    className='layout-dashboard'
    style={{
      minHeight: '250vh',
    }}>
    <MenuDesplegable />
      
    <Content><CrearCategoria/></Content>
    </Layout>
  );
};
