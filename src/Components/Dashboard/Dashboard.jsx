import { FileOutlined, PieChartOutlined, UserOutlined ,DesktopOutlined, TeamOutlined} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import Canva1 from "./Canva1";
import Canva2 from "./Canva2";
import { Progress, Space } from 'antd';
import './Dashboard.css'
import Canva3 from "./Canva3";
import { SlChart , SlSettings , SlPeople , SlPencil , SlPlus , SlTrash , SlEvent} from "react-icons/sl";



const { Header, Content,Sider } = Layout;


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Dashboard', '1', <SlChart />),
  getItem('Configuración', '2', <SlSettings/>),
  getItem('Usuarios', 'sub1', < SlPeople />, [
    getItem('Modificar', '3' , <SlPencil />),
    getItem('Agregar', '4', <SlPlus />),
    getItem('Borrar', '5', <SlTrash />),
  ]),
  getItem('Eventos', 'sub2', < SlEvent />, [
    getItem('Modificar', '6' , <SlPencil />),
    getItem('Agregar', '7', <SlPlus />),
    getItem('Borrar', '8', <SlTrash />),
  ]),
];
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
    className='layout-dashboard'
      style={{
        minHeight: '275vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
            
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        > <h3 className='titulo-dashboard'>DASHBOARD</h3></Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            style={{
              padding: 5,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            
        <div className="contenedor-dashboard">
        <div className="card">
            <Space wrap className="contenedor-porcentajes">
                <div>
                <p>Tickets vendidos</p>
                <Progress strokeColor="#AED6F1" type="dashboard" percent={80} />
                <p>45 tickets</p>
                </div>
                <div>
                <p>Cantidad de suscriptores</p>
                <Progress strokeColor="#AED6F1" type="dashboard" percent={20} gapDegree={30} />
                <p>5 suscriptores</p>
                </div>
                <div>
                <p>Cantidad de eventos 5 estrellas</p>
                <Progress strokeColor="#AED6F1" type="dashboard" percent={90} gapDegree={30} />
                <p>13 eventos</p>
                </div>
            </Space>
        </div>
        <div className="contenedor-dashboard-canvas">
            <div className="card canva"><Canva1 /></div>
            <div className="card canva"><Canva2 /></div>
            <div className="card canva"><Canva3 /></div>
        </div>
        </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

  export default Dashboard;