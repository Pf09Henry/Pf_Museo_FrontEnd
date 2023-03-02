import React from "react";
import { Layout } from 'antd';
import './../Dashboard.css'
import { Content } from 'antd/es/layout/layout';
import MenuDesplegable from '../Menu-desplegable';
import PerfilAnt from "./PerfilAnt";

export default function Perfil(){
    return(
        <Layout
        className='layout-dashboard-perfil'
          style={{
            minHeight: '300vh',
          }}
        >
    
        <MenuDesplegable />
        <Content><PerfilAnt/></Content>
        </Layout>
    )
}