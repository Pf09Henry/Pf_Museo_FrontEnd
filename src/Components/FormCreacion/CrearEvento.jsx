import React, { useState } from 'react';
import {  UploadOutlined } from '@ant-design/icons';
import {
  Button,
   Form,
  InputNumber,
  Select,
   Upload,
  Input,
  DatePicker,
  Space,
  
} from 'antd';
import Swal from 'sweetalert2'
import './../FormCreacion/CrearEvento.css'



function Crear(){ 

  const [inicialValues, setValues] = useState({
    name:"",
    startDay:"",
    endDay:"",
    price: 0,
    img:"",
    information:"",
    guide:[{name:"",image:""}],
    category:[{name:""}]
  })


  const { TextArea } = Input;

  const { RangePicker } = DatePicker;
  
  const { Option } = Select;
  
  
  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  
  
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
 
      let diaIn=(values.dias[0].$d).toString()
      let diaInicio=diaIn.slice(4,15)
      let diaF=(values.dias[1].$d).toString()
      let diaFin=diaF.slice(4,15)
    setValues({
    name:values.username,
    startDay:diaInicio,
    endDay:diaFin,
    price: values.precio,
    img:values.upload[0].thumbUrl,
    information:values.description,
    guide:[{name:values.selectGuia,image:values.fotoGuia[0].thumbUrl}],
    category:[{name:values.select}]
    })
    Swal.fire({
      title: 'Éxito',
      text: 'Tu actividad se creó con éxito',
      icon: 'success',
      confirmButtonText: 'OK'
    })
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
  

return(
  <div className='contenedor-form'>
    <h3 className='titulo-form-evento'>Crear Evento</h3>
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
          message: 'Por favor escribir un nombre al evento',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name="select"
      label="Categoria"
      hasFeedback
      rules={[
        {
          required: true,
          message: 'Por favor elegir una categoria',
        },
      ]}
    >
      <Select placeholder="Categoria del evento">
    
        <Option value="Categoria 1">Categoria 1</Option>
        <Option value="Categoria 2">Categoria 2</Option>
      </Select>
    </Form.Item>


    <Space direction="vertical" size={12}>
    <Form.Item
      name="dias"
      label="Fecha"
      hasFeedback
      rules={[
        {
          required:true,
          message: 'Por favor elegir una fecha',
        },
      ]}
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
      rules={[
        {
          required: true,
          message: 'Por favor elegir un guia',
        },
      ]}
    >
      <Select placeholder="Guia del evento">
    
    <Option value="Guia 1">Guia 1</Option>
    <Option value="Guia 2">Guia 2</Option>
  </Select>
    </Form.Item>

    <Form.Item
      name="fotoGuia"
      label="Foto Guia"
      valuePropName="fileList"
      getValueFromEvent={normFile}
      rules={[
        {
          required: true,
          message: 'Por favor elegir una foto del guia',
        },
      ]}
     
    >
      <Upload name="logo" action="/upload.do" listType="picture">
        <Button icon={<UploadOutlined />}>Subir</Button>
      </Upload>
    </Form.Item>



    <Form.Item label="Precio">
      <Form.Item name="precio" noStyle
      rules={[
        {
          required: true,
          message: 'Por favor indicar un precio',
        },
      ]}>
        <InputNumber  min={1}/>
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
      name="upload"
      label="Foto del evento"
      valuePropName="fileList"
      getValueFromEvent={normFile}
      rules={[
        {
          required: true,
          message: 'Por favor subir una foto del evento',
        },
      ]}
    >
      <Upload name="logo"  listType="picture">
        <Button icon={<UploadOutlined />}>Subir</Button>
      </Upload>
    </Form.Item>



    <Form.Item name="description" label="Descripción" rules={[
        {
          required: true,
          message: 'Por favor indicar una descripción',
        },
      ]}>
    <TextArea
        showCount
        maxLength={400}
        style={{
          height: 120,
          marginBottom: 24,
        }}
       
        placeholder="Descripción del evento"
      />
    </Form.Item>





    <Form.Item
      wrapperCol={{
        span: 12,
        offset: 6,
      }}
    >
      <Button type="primary" htmlType="submit" className='btn-secundario' style={{backgroundColor:"rgb(56, 102, 103"}}>
        Agregar
      </Button>
    </Form.Item>
  </Form>
  </div>
)};
export default Crear;