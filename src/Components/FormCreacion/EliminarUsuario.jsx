import React, { useEffect, useState } from 'react';
import {
  Button,
   Form,
  Input,
} from 'antd';
import Swal from 'sweetalert2'
import './../FormCreacion/CrearEvento.css'
import { useDispatch, useSelector } from "react-redux";
import {getUserName, getUserById, getUsers, deleteUser} from "../../Actions/AppActions/appActions";
import { Avatar, List, Skeleton } from 'antd';



function BorrarUsuario(){ 
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')
  const eventos = useSelector((state) => state.users);
  const [id, setId] = useState("");
  const [initLoading, setInitLoading] = useState(true);
  const [list, setList] = useState([]);


  
 


  const handleSearch = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  }


  const filteredUsers = eventos.filter(user => user.name.toLowerCase().includes(searchValue));
/*   useEffect (()=>{
    dispatch(getUserName(nameEvent));
  },[dispatch, nameEvent]) 

  
 useEffect (()=>{
    dispatch(getUserById(id))
    console.log("este id le estoy pasando", id)
  },[dispatch, id]) */

  useEffect (()=>{
    dispatch(getUsers());
  },[dispatch]) 

  useEffect(() => {
    setInitLoading(false);
        setList(eventos);
  }, [eventos]);



 function setDatos(e){
  setId(e)
  const eventoFiltrado= eventos.filter(ev => ev.id === e)
  console.log(eventoFiltrado[0])
  Swal.fire({
    title: 'Éxito',
    text: 'El usuario se elimino con éxito',
    icon: 'success',
    confirmButtonText: 'OK',
    confirmButtonColor: "#035d03"
  })
 }



  
 
  
  const onFinish = () => {
 
    Swal.fire({
      title: 'Éxito',
      text: 'El usuario se elimino con éxito',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: "#035d03"
    })


    var form = true;

    if (form) {
      dispatch(deleteUser(id))

    } 

  };
  
  const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
      Swal.fire({
          title: 'Ups!',
          text: "No se encuentra el usuario",
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: "#035d03"
        })
    };



return(
  <div className='contenedor-form'>
     <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
 
    <h3 className='titulo-form-evento'>Eliminar Usuario</h3>

    <hr></hr>
    <div>
      
    <Form.Item
      label="Buscar"
      name="username-buscado"
    >
      <Input value={searchValue} onChange={handleSearch}/>
     
    </Form.Item>

    <List
      className="demo-loadmore-list "
      loading={initLoading}
     itemLayout="horizontal"
      dataSource={filteredUsers}
      
      renderItem={(item) => (
        <List.Item>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
            className='lista-eventos-small'
              avatar={<Avatar src={item.image} />}
              title={item.name}
              
            />
           
            <Button onClick={()=>setDatos(item.id)} htmlType="submit" >Borrar</Button>
           
          </Skeleton>
        </List.Item>
      )}
    />
    </div>

    </Form>
  </div>
)};


export default BorrarUsuario;