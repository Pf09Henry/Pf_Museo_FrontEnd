import React from 'react';
import { Layout} from 'antd';
import './../Dashboard.css'
import { Content } from 'antd/es/layout/layout';
import ModificarGuia from '../../FormCreacion/ModificarGuia';
import MenuDesplegable from '../Menu-desplegable';






export default function MofificarGuia() {



  return (
    <Layout
    className='layout-dashboard'
      style={{
        minHeight: '250vh',
      }}
    >
     <MenuDesplegable />
    <Content><ModificarGuia/></Content>
    </Layout>
  );
};
