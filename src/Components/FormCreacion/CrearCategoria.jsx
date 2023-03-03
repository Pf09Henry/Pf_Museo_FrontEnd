import React, { useState } from 'react';
import {
  Button,
   Form,
  Select,
  Input,
  DatePicker,

} from 'antd';
import Swal from 'sweetalert2'
import './../FormCreacion/CrearEvento.css'
import { useDispatch } from "react-redux";
import { postCategory } from "../../Actions/AppActions/appActions";



function CrearCategoria(){ 

  


  const dispatch = useDispatch();
  
  const [inicialValues, setValues] = useState({
    name:"",
  })
  const { TextArea } = Input;

  const { RangePicker } = DatePicker;
  
  const { Option } = Select;
  

  
  const onFinish = (values) => {
    /* console.log('Received values of form: ', values); */
 
    let valores={
      name:values.username,
      }

    setValues({
    name:values.username,
    })
    Swal.fire({
      title: 'Éxito',
      text: 'Tu usuario se creó con éxito',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: "#035d03"
    })


    var form = true;

    if (form) {
      dispatch(postCategory(valores))
       
    } else {
      return Swal.fire({
        title: 'Ups!',
        text: "A tu usuario le faltan detalles",
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: "#035d03"
      })
    }
/*     console.log(inicialValues) */
  };
  
  const onFinishFailed = (errorInfo) => {
  /*     console.log('Failed:', errorInfo); */
      Swal.fire({
          title: 'Ups!',
          text: "Uno o mas datos no fueron cargados",
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: "#035d03"
        })
    };


  

return(
  <div className='contenedor-form'>
    <h3 className='titulo-form-evento'>Crear Categoria</h3>
    <hr></hr>
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

    <Form.Item
      label="Nombre"
      name="username"
      rules={[
        {
          required: true,
          message: 'Por favor escribir un nombre',
        },
      ]}
    >
      <Input  placeholder='Nombre'/>
    </Form.Item>

    
    <Form.Item
      wrapperCol={{
        span: 12,
        offset: 6,
      }}
    >
      <Button type="primary" htmlType="submit" className='btn-secundario' style={{backgroundColor:"rgb(56, 102, 103"}}>
       Crear
      </Button>
    </Form.Item>
  </Form>
  </div>
)};


export default CrearCategoria;