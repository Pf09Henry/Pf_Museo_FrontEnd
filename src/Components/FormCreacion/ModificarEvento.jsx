import React, { useState } from 'react';
import {
  Button,
   Form,
  InputNumber,
  Select,
  Input,
  DatePicker,
  Space,
  Checkbox,
  Dropdown,
  Menu
  
} from 'antd';
import Swal from 'sweetalert2'
import './../FormCreacion/CrearEvento.css'
import { useDispatch } from "react-redux";
import { postEvent } from "../../Actions/AppActions/appActions";



function Modificar(){ 

  


  const dispatch = useDispatch();
  
  const [inicialValues, setValues] = useState({
    name:"No hay evento",
    startDay:"",
    endDay:"",
    price: "No hay evento",
    img:"No hay evento",
    information:"No hay evento",
    guide:[{name:"No hay evento"}],
    category:[{name:"No hay evento"}]
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
      text: 'Tu actividad se creó con éxito',
      icon: 'success',
      confirmButtonText: 'OK'
    })


    var form = true;

    if (form) {
      dispatch(postEvent(valores))
        .then(() => alert("Evento agregado"));
    } else {
      return alert(" A tu actividad le faltan detalles");
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
 
    <h3 className='titulo-form-evento'>Modificar Evento</h3>
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
    >
      <Input placeholder={inicialValues.name}/>
    </Form.Item>

    <Form.Item
      name="select"
      label="Categoria"
      hasFeedback
    >
      <Select placeholder={inicialValues.category[0].name}>
    
        <Option value="Social">Social</Option>
        <Option value="Arte">Arte</Option>
        <Option value="Ciencias">Ciencias</Option>
        <Option value="Ecológico">Ecológico</Option>
      </Select>
    </Form.Item>


    <Space direction="vertical" size={12}>
    <Form.Item
      name="dias"
      label="Fecha"
      hasFeedback
    >
      <RangePicker
      dateRender={(current) => {
        const style = {};
        if (current.date() === 1) {
          style.border = '1px solid #1890ff';
          style.borderRadius = '50%';
        }
        return (
          <div className="ant-picker-cell-inner" style={style}>
            {current.date()}
          </div>
        );
      }}
    />
    </Form.Item>
  </Space>
  

    <Form.Item
      name="selectGuia"
      label="Guia"
    >
      <Select placeholder={inicialValues.guide[0].name}>
    
    <Option value="Claudio">Claudio</Option>
    <Option value="Karen">Karen</Option>
    <Option value="Soledad">Soledad</Option>
    <Option value="Martin">Martin</Option>
  </Select>
    </Form.Item>


    <Form.Item label="Precio">
      <Form.Item name="precio" noStyle
     >
        <InputNumber  min={1} placeholder={inicialValues.price}/>
      </Form.Item>
      <span
        className="ant-form-text"
        style={{
          marginLeft: 8,
        }}
      >
        $
      </span>
    </Form.Item>


  <Form.Item
      label="Foto del evento"
      name="upload"
     
    >
      <Input type='file'/>
    </Form.Item>


    <Form.Item label="Cupos">
      <Form.Item name="availability" noStyle
     >
        <InputNumber  min={1}/>
      </Form.Item>
      
    </Form.Item>
    



    <Form.Item name="description" label="Descripción" >
    <TextArea
        showCount
        maxLength={400}
        style={{
          height: 120,
          marginBottom: 24,
        }}
       
        placeholder={inicialValues.information}
      />
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


export default Modificar;