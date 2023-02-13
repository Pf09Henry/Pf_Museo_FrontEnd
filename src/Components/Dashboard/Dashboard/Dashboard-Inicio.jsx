import { Layout } from "antd";
import React from "react";
import MenuDesplegable from "../Menu-desplegable";
import { Content } from "antd/es/layout/layout";
import Dashboard from "../Dashboard";


export default function Dash(){
    return(
        <Layout
        className='layout-dashboard'
        style={{
          minHeight: '250vh',
        }}>
            <MenuDesplegable />
            <Content><Dashboard /></Content>
        </Layout>
    )
}