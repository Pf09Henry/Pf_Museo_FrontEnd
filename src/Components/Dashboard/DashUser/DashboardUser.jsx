import React, { useState } from 'react';
import { Layout, Menu  } from 'antd';
import { Link } from 'react-router-dom';
import { Content } from 'antd/es/layout/layout';
import {FaUserCircle} from 'react-icons/fa'
import PerfilAnt from '../Perfil/PerfilAnt';
import Logout from "./../../Login/Logout";
import { FiLogOut} from "react-icons/fi";

const { Sider } = Layout;



export default function DashUser() {

  const [collapsed, setCollapsed] = useState(false);
  

  const onCollapse = (collapsed) => setCollapsed(collapsed);



  return (
  <Layout
   className='layout-dashboard'
     style={{
       minHeight: '250vh',
     }}>
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
  
      

      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >

     
        <Menu.Item key="/perfilUser" icon={  <FaUserCircle />}>
           
           <span>Perfil</span>
           <Link to="/perfilUser"></Link>
         </Menu.Item>

         <Menu.Item icon={  <FiLogOut />}>
            <span><Logout /></span>
          
        </Menu.Item>

     
      </Menu>


    </Sider>
    <Content><PerfilAnt/></Content>
    </Layout>
  );
};
