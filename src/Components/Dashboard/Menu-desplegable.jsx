import React, { useState } from 'react';
import { Layout, Menu  } from 'antd';
import { Link } from 'react-router-dom';
import './Dashboard.css'
import { SlChart , SlPeople , SlPencil , SlPlus , SlTrash , SlEvent } from "react-icons/sl";
import { TfiComment} from "react-icons/tfi";
import {BsPersonBadge} from "react-icons/bs";
import {BiCategory} from "react-icons/bi";
import SubMenu from 'antd/es/menu/SubMenu';
import { Content } from 'antd/es/layout/layout';
import Dashboard from './Dashboard';


const { Sider } = Layout;



export default function MenuDesplegable() {

  const [collapsed, setCollapsed] = useState(false);


  const onCollapse = (collapsed) => setCollapsed(collapsed);



  return (
    <Layout
    className='layout-dashboard'
      style={{
        minHeight: '250vh',
      }}
    >
   
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
  
      

      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >

        <Menu.Item key="/dashboard" icon={  <SlChart />}>
           
          <span> Dashboard</span>
          <Link to="/dashboard"></Link>
        </Menu.Item>

        
        <SubMenu icon={ <SlPeople />} title="Usuarios" >

                <Menu.Item icon={<SlPlus /> }>
                 
                    <span>Agregar</span>
                    <Link to="/dashoboard-user-agregar"></Link>
                </Menu.Item>

                <Menu.Item icon={<SlPencil /> }>
                     
                     <span>Modificar</span>
                     <Link to="/dashoboard-user-modificar"></Link>
                 </Menu.Item>

                <Menu.Item icon={<SlTrash /> }>
                   
                    <span>Borrar</span>
                    <Link to="/dashoboard-user-borrar"></Link>
                </Menu.Item>
      
        </SubMenu>


        <SubMenu icon={< SlEvent />} title="Eventos" >

            <Menu.Item icon={<SlPlus /> }>
            
                <span>Agregar</span>
                <Link to="/dashoboard-eventos-agregar"></Link>
            </Menu.Item>

            <Menu.Item icon={<SlPencil /> }>
                
                <span>Modificar</span>
                <Link to="/dashoboard-eventos-modificar"></Link>
            </Menu.Item>

            <Menu.Item icon={<SlTrash /> }>
            
                <span>Borrar</span>
                <Link to="/dashoboard-eventos-borrar"></Link>
            </Menu.Item>

        </SubMenu>


        <SubMenu icon={< TfiComment />} title="Comentarios" >

            <Menu.Item icon={<SlPlus /> }>
            
                <span>Agregar</span>
                <Link to="/dashoboard-eventos-agregar"></Link>
            </Menu.Item>

            <Menu.Item icon={<SlPencil /> }>
                
                <span>Modificar</span>
                <Link to="/dashoboard-eventos-modificar"></Link>
            </Menu.Item>

            <Menu.Item icon={<SlTrash /> }>
            
                <span>Borrar</span>
                <Link to="/dashoboard-eventos-borrar"></Link>
            </Menu.Item>

        </SubMenu>


        <SubMenu icon={< BsPersonBadge />} title="Guias" >

            <Menu.Item icon={<SlPlus /> }>
            
                <span>Agregar</span>
                <Link to="/dashoboard-guias-agregar"></Link>
            </Menu.Item>

            <Menu.Item icon={<SlPencil /> }>
                
                <span>Modificar</span>
                <Link to="/dashoboard-guias-modificar"></Link>
            </Menu.Item>

            <Menu.Item icon={<SlTrash /> }>
            
                <span>Borrar</span>
                <Link to="/dashoboard-guias-borrar"></Link>
            </Menu.Item>

        </SubMenu>  


        <SubMenu icon={< BiCategory />} title="Categorias" >

            <Menu.Item icon={<SlPlus /> }>
            
                <span>Agregar</span>
                <Link to="/dashoboard-guias-agregar"></Link>
            </Menu.Item>

            <Menu.Item icon={<SlPencil /> }>
                
                <span>Modificar</span>
                <Link to="/dashoboard-guias-modificar"></Link>
            </Menu.Item>

            <Menu.Item icon={<SlTrash /> }>
            
                <span>Borrar</span>
                <Link to="/dashoboard-guias-borrar"></Link>
            </Menu.Item>

        </SubMenu>  
     
      </Menu>


     
    </Sider>


    {/*ESTO ES LO ÚNICO QUE CAMBIA, DSP VER COMO HACERLO DINAMICO*/}
    <Content><Dashboard/></Content>
    </Layout>
  );
};

