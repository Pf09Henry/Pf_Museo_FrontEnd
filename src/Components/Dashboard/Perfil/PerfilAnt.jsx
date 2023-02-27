import { Avatar, Button, Card, Col, Divider, Drawer, List, Row, Spin } from 'antd';
import './PerfilAnt.css'
import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers , getTickets, getReview} from './../../../Actions/AppActions/appActions';
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
  const ticketsBase = useSelector((state) => state.tickets);
  const review = useSelector((state) => state.review);
  const [ticket,setTicket] = useState([])
  const [reviewCom,setReview] = useState([])
  const [loading, setLoading] = useState(true);


  function searchIdTicket(){
    let usuarioEncontrado = usuarios.filter(el => el.email === user.email)
    let reviewEncontrado = review.filter(re => re.user.email === usuarioEncontrado[0].email)
    let ticketEncontrado = ticketsBase.filter(t => t.user.email === usuarioEncontrado[0].email)
    setTicket(ticketEncontrado)
    setReview(reviewEncontrado)
    return ticketEncontrado
  }



  useEffect(()=>{
   dispatch(getTickets())
   dispatch(getReview())
  },[dispatch])

useEffect(()=>{
    searchIdTicket()
    setTimeout(() => {setLoading(false);
    }, 1000);

},[])



  function searchIdUser(name){
    let usuarioEmail =usuarios.filter(el => el.email === user.email)
  /*   let usuarioEncontrado = usuarioEmail.filter(el => el.name === name) */
    /* console.log(usuarioEncontrado[0]) */
    return usuarioEmail[0]
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
        {loading ? (
        <div><Spin/></div>
      ) : (
        reviewCom?.map((c) =>
        
        <Card
                className="ticket"
                key={searchIdUser(user.name)}
                style={{
                width: 300,
                }}
              
          
            >
             
                <Meta
                avatar={<Avatar src={c.user.image} alt={c.user.name} />}
                title={c.event.name}
                description={
                    <div>
                  
                    <p>Puntaje: {c.score}</p>
                    <p>Comentario: {c.commentary}</p>
                    </div>
                } 
             
                />
        </Card>
        ) )}
        </div>
          
        </Row>
    
       
        <p className="site-description-item-profile-p">Tickets</p>
        <Row>
        <div className="list-tickets">
             {loading ? (
     <div><Spin/></div>
      ) :  (
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
                title={t.event.name}
                description={
                    <div>
                    
                    <p>Cantidad tickets: {t.amount}</p>
                    <p>Total de la compra: {t.totalOfPurchase}</p>
                    <p>Metodo de pago: {t.methodOfPurchase}</p>
                    </div>
                } 
             
                />
        </Card>
        )) }
        </div>
        </Row>
        
     {/*  </Drawer> */}
      </div>
  );
};
export default PerfilAnt;