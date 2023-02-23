import { Avatar, Button, Card, Col, Divider, Drawer, List, Row } from 'antd';
import './PerfilAnt.css'
import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers , getTickets} from './../../../Actions/AppActions/appActions';
import { useAuth0 } from "@auth0/auth0-react";
import Meta from 'antd/es/card/Meta';



const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);



const PerfilAnt = () => {


  const { user} = useAuth0();
  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.users);
  const tickets = useSelector((state) => state.tickets);
  const [ticket,setTicket] = useState([])


  function searchIdTicket(){
    let usuarioEncontrado = usuarios.filter(el => el.name === user.name)
    let ticketEncontrado = tickets.filter(t => t.user.name === usuarioEncontrado[0].name)
   /* console.log('USERNAME',usuarioEncontrado[0].name)*/
    console.log('USERTIKER',ticket)
  /* console.log('TICKET',ticketEncontrado[0])  */
    setTicket(ticketEncontrado[0])
    return ticketEncontrado[0]
  }


useEffect(()=>{
    searchIdTicket()
    console.log(ticket)
    
},[tickets,ticket])



  function searchIdUser(name){
    let usuarioEncontrado = usuarios.filter(el => el.name === name)
    /* console.log(usuarioEncontrado[0]) */
    return usuarioEncontrado[0]
  }

 /*  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  }; */
  return (
   <div className='contenedor-form-user'>
    <h3>Perfil</h3>
      <List>
        
          <List.Item>
            <List.Item.Meta
       
              avatar={
                <Avatar src={searchIdUser(user.name).image} alt={user.name} />
              }
              title={user.name}
          
            />
          </List.Item>
          </List>    
   
   {/*    <Drawer width={640} placement="right" closable={false} onClose={onClose} open={open}> */}
        <p
          className="site-description-item-profile-p"
          style={{
            marginBottom: 24,
          }}
        >
          Datos Personales
        </p>
        
        <Row>
          <Col span={12}>
            <DescriptionItem title='Nombre Completo' content={user.name} />
          </Col>
          <Col span={12}>
            <DescriptionItem title='Email' content={user.email} />
          </Col>
        </Row>
        
        
        <p className="site-description-item-profile-p">Comentarios</p>
        <Row>
        <div className="list-tickets">
             {ticket?.length > 0 ? (
                ticket?.map((t) =>
 
        <Card
                className="ticket"
                key={searchIdUser(user.name)}
                style={{
                width: 300,
                }}
              
          
            >
             
                <Meta
             avatar={<Avatar src={t.user.image} alt={t.user.name} />}
                title={t.id}
                description={
                    <div>
                    
                    <p>Cantidad tickets:{t.amount}</p>
                    <p>Total de la compra:{t.totalOfPurchase}</p>
                    <p>Metodo de pago:{t.methodOfPurchase}</p>
                    </div>
                } 
             
                />
        </Card>
        )) : (
           <p>No se encontraron Comentarios</p>
            )}
        </div>
          
        </Row>
    
       
        <p className="site-description-item-profile-p">Tickets</p>
        <Row>
        <div className="list-tickets">
             {ticket?.length > 0 ? (
                ticket?.map((t) =>
 
        <Card
                className="ticket"
                key={searchIdUser(user.name)}
                style={{
                width: 300,
                }}
              
          
            >
             
                <Meta
             avatar={<Avatar src={t.user.image} alt={t.user.name} />}
                title={t.id}
                description={
                    <div>
                    
                    <p>Cantidad tickets:{t.amount}</p>
                    <p>Total de la compra:{t.totalOfPurchase}</p>
                    <p>Metodo de pago:{t.methodOfPurchase}</p>
                    </div>
                } 
             
                />
        </Card>
        )) : (
            <p>No se encontraron Tickets</p>
            )}
        </div>
        </Row>
        
     {/*  </Drawer> */}
      </div>
  );
};
export default PerfilAnt;