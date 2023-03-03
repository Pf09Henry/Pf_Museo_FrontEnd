import React, { useState , useEffect} from 'react';
import {
  Button,
   Form,
  Select,
  Input,
  Row,
  Col,
  Checkbox,
  List,
  Avatar,
  Skeleton,

} from 'antd';
import Swal from 'sweetalert2'
import './../FormCreacion/CrearEvento.css'
import { useDispatch, useSelector } from "react-redux";
import { getUserById, getUserName, getUsers, putUser } from "../../Actions/AppActions/appActions";



function ModificarUsuario(){ 
  const { Option } = Select;
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('')
  const eventos = useSelector((state) => state.users);
  const [id, setId] = useState("");
  const [initLoading, setInitLoading] = useState(true);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  function role(rolId){
    switch (rolId) {
      case "5da99330-f614-4936-aed7-1927ce59eb2a":
        return "Finanzas";
      
      case "0a646fd3-e17b-42ab-84c0-c812fb2aeb5a":
        return "Super Administrador";
      
      case "8d199072-b4e7-4142-8d30-7653987afa7d":
       return "Administrador";
      
      case "745f6f0f-857d-48f7-8d5b-70df556b1a59":
        return "Creador de contenido";
      
      case "0095673c-9bf3-4c10-bd78-9d0194f5e045":
        return "Suscriptor"
  
      default:
       return "Usuario"
    }
  }
  



  const [inicialValues, setValues] = useState({
    name:"No hay usuario",
    email:"No hay usuario",
    image:"No hay usuario",
    password:"No hay usuario",
    phone:"No hay usuario",
    roleId: role("")
  })
 
  let count = 3

  
 

/* 
  function buscarNombre(e){
   
    dispatch(getUserName(e.target.value));
  } */

  const handleSearch = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  }


  const filteredUsers = eventos.filter(user => user.name.toLowerCase().includes(searchValue));



  useEffect (()=>{
    (async () => {
      await dispatch(getUsers());
    })();
  },[dispatch]) 

  useEffect(() => {
    setInitLoading(false);
        setData(eventos);
        setList(eventos);
  }, [eventos]);


  
 function setDatos(e){
  setId(e)
  const eventoFiltrado= eventos.filter(ev => ev.id === e)
  setValues(eventoFiltrado[0]);
  dispatch(getUserById(e))
 /*  
/*   
  
 }

 
  

  
  const onFinish = (values) => {
   /*  

    

    let valores={
      name:values.username,
      image:inicialValues.image,
      email:values.email,
      password:values.password,
      phone:values.phone,
      roleId:values.rol
      }


    setValues({
      name:values.username,
      email:values.email,
      password:values.password,
      phone:values.phone,
      roleId:role(values.rol)
    })
    Swal.fire({
      title: 'Éxito',
      text: 'Tu usuario se modificó con éxito',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: "#035d03"
    })
 


    var form = true;

    if (form) {
      dispatch(putUser(valores, id))

    }
  };
  
  const onFinishFailed = (errorInfo) => {
      
      Swal.fire({
          title: 'Ups!',
          text: "Uno o mas datos no fueron cargados",
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: "#035d03"
        })
    };
  const [componentDisabled, setComponentDisabled] = useState(true);
  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);

  };

  const agregarFoto = (e) => {
    let file = e.target.files[0]
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setValues({
          image: reader.result
        })
      };
    }
  }


return(
  <div className='contenedor-form'>
    <h3 className='titulo-form-evento'>Modificar Usuario</h3>
    <hr></hr>
  <div>
    <Form.Item
      label="Buscar"
      name="username-buscado"
    >
      <Input onChange={handleSearch} value={searchValue} />
     
    </Form.Item>
    <hr></hr>

    <List
      className="demo-loadmore-list "
      loading={initLoading}
     itemLayout="horizontal"
      /* loadMore={loadMore} */
      dataSource={filteredUsers.slice(0,count)}
      
      renderItem={(item) => (
        <List.Item>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
            className='lista-eventos-small'
              avatar={<Avatar src={item.image} />}
              title={item.name}
              
            />
           
            <Button onClick={()=>setDatos(item.id)}>Datos</Button>
           
          </Skeleton>
        </List.Item>
      )}
    />
   </div>

    <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Editar
      </Checkbox>
      <hr></hr>
    

    <Form.Item
      label="Nombre"
      name="username"
      
    >
     {inicialValues.name}
    </Form.Item>

  {/*   <Form.Item
      label="Foto de perfil"
      name="upload"
     
    >

     <input type='file' onChange={agregarFoto} />
    </Form.Item> */}




  {/*   <Form.Item label="Teléfono"
       name="phone"
       >
          {inicialValues.phone}

    </Form.Item>
 */}


    <Form.Item
      label="Email"
      name="email"
      
    >{inicialValues.email}
    </Form.Item>

    
{/* 
    <Form.Item
      label="Contraseña"
      name="password"
      
    >
      <Input placeholder='*******'/>
    </Form.Item> */}
          <Form

      onValuesChange={onFormLayoutChange}
      disabled={componentDisabled}
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
        "username":`${inicialValues.name}`,
        "phone":`${inicialValues.phone}`,
        "email":`${inicialValues.email}`,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      >

    <Form.Item
      name="rol"
      label="Rol"
      hasFeedback
      
    >
      <Select placeholder={inicialValues.roleId}>
    
        <Option value="aacaef0e-fd5b-4d0f-ac88-bbffa0a1fe87">Usuario</Option>
        <Option value="5da99330-f614-4936-aed7-1927ce59eb2a">Finanzas</Option>
        <Option value="0a646fd3-e17b-42ab-84c0-c812fb2aeb5a">Super Administrador</Option>
        <Option value="8d199072-b4e7-4142-8d30-7653987afa7d">Administrador</Option>
        <Option value="745f6f0f-857d-48f7-8d5b-70df556b1a59">Creador de contenido</Option>
        <Option value="0095673c-9bf3-4c10-bd78-9d0194f5e045">Suscriptor</Option>
      </Select>
    </Form.Item>


    
    <Form.Item
      wrapperCol={{
        span: 12,
        offset: 6,
      }}
    >
      <Button type="primary" htmlType="submit" className='btn-secundario btn-form-mod' style={{backgroundColor:"rgb(56, 102, 103"}}>
       Modificar
      </Button>
    </Form.Item>
  </Form>
  </div>
)};


export default ModificarUsuario;