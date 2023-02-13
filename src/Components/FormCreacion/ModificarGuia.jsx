import React, { useState } from 'react';
import {
  Button,
   Form,
  Select,
  Input,
  DatePicker,
  Row,
  Col,
  Checkbox
  
} from 'antd';
import Swal from 'sweetalert2'
import './../FormCreacion/CrearEvento.css'
import { useDispatch } from "react-redux";
import { postEvent } from "../../Actions/AppActions/appActions";



function ModificarGuia(){ 

  


  const dispatch = useDispatch();
  
  const [inicialValues, setValues] = useState({
    name:"",
    startDay:"",
    endDay:"",
    price: 0,
    img:"",
    information:"",
    guide:[{name:""}],
    category:[{name:""}]
  })
  const { TextArea } = Input;

  const { RangePicker } = DatePicker;
  
  const { Option } = Select;
  

  
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
 
      let diaIn=(values.dias[0].$d).toString()
      let diaInicio=diaIn.slice(4,15)
      let diaF=(values.dias[1].$d).toString()
      let diaFin=diaF.slice(4,15)
    let valores={
      name:values.username,
      startDay:diaInicio,
      endDay:diaFin,
      price: values.precio,
      img:values.upload,
      information:values.description,
      guide:values.selectGuia,
      category:values.select
      }

    setValues({
    name:values.username,
    startDay:diaInicio,
    endDay:diaFin,
    price: values.precio,
    img:values.upload,
    information:values.description,
    guide:[{name:values.selectGuia}],
    category:[{name:values.select}]
    })
    Swal.fire({
      title: 'Éxito',
      text: 'Tu usuario se creó con éxito',
      icon: 'success',
      confirmButtonText: 'OK'
    })


    var form = true;

    if (form) {
      dispatch(postEvent(valores))
       
    } else {
      return alert(" A tu usuario le faltan detalles");
    }
    console.log(inicialValues)
  };
  
  const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
      Swal.fire({
          title: 'Ups!',
          text: "Uno o mas datos no fueron cargados",
          icon: 'error',
          confirmButtonText: 'OK'
        })
    };
  
    const [componentDisabled, setComponentDisabled] = useState(true);
    const onFormLayoutChange = ({ disabled }) => {
      setComponentDisabled(disabled);
    };

return(
  <div className='contenedor-form'>
    <h3 className='titulo-form-evento'>Modificar Guia</h3>
    <hr></hr>

    <Form.Item
      label="Buscar"
      name="username-buscado"
    >
      <Input />
      {/* <div >
      
      <>
        <Dropdown
          overlay={(
            <Menu>
              <Menu.Item key="0">
                Menu Item One
              </Menu.Item>
              <Menu.Item key="1">
              Menu Item Two
              </Menu.Item>
              <Menu.Item key="1">
              Menu Item Three
              </Menu.Item>
            </Menu>
          )}
          trigger={['click']}>
          <a href=" "className="ant-dropdown-link" 
             onClick={e => e.preventDefault()}>
            Open Dropdown
          </a>
        </Dropdown>
      </>
    </div> */}
    </Form.Item>
    <hr></hr>

    <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Editar
      </Checkbox>
      <hr></hr>
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
      label="Foto de perfil"
      name="upload"
     
    >
      <Input type='file'/>
    </Form.Item>



    
    <Form.Item
      wrapperCol={{
        span: 12,
        offset: 6,
      }}
    >
      <Button type="primary" htmlType="submit" className='btn-secundario' style={{backgroundColor:"rgb(56, 102, 103"}}>
       Modificar
      </Button>
    </Form.Item>
  </Form>
  </div>
)};


export default ModificarGuia;