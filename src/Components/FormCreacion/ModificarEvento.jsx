import React, { useEffect, useState } from 'react';
import {
  Button,
   Form,
  InputNumber,
  Select,
  Input,
  DatePicker,
  Space,
  Checkbox,

  
} from 'antd';
import Swal from 'sweetalert2'
import './../FormCreacion/CrearEvento.css'
import { useDispatch, useSelector } from "react-redux";
import {putEvent , getEventsName ,getEvents , getEventsById} from "../../Actions/AppActions/appActions";
import { Avatar, List, Skeleton } from 'antd';



function Modificar(){ 
  
  const dispatch = useDispatch();
  const [nameEvent, setName] = useState("")
  const eventos = useSelector((state) => state.eventos);
  const [currentPage, setCurrentPage] = useState(0);
  const [id, setId] = useState("");
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [inicialValues, setValues] = useState({
    name:"No hay evento",
    startDay:"",
    endDay:"",
    price: 0,
    img:"No hay evento",
    information:"No hay evento",
    availability:0,
    guide:[{name:"No hay evento"}],
    category:[{name:"No hay evento"}]
  })
  const { TextArea } = Input;

  const { RangePicker } = DatePicker;
  
  const { Option } = Select;
  let count = 3

  
 


  function buscarNombre(e){
 
    setName(e.target.value)
    dispatch(getEventsById(id))
  }

  useEffect (()=>{
    dispatch(getEventsName(nameEvent));
  },[dispatch, nameEvent]) 
/* 
  
 useEffect (()=>{
    
  },[dispatch, id]) */

  useEffect (()=>{
    (async () => {
      await dispatch(getEvents());
    })();
  },[dispatch]) 

  useEffect(() => {
    setInitLoading(false);
        setData(eventos);
        setList(eventos);
  }, [eventos]);


  const onLoadMore = () => {
    setLoading(true);

    if(list.length > count){
      count = count + 3 
    }
   

  };



  const loadMore =
    (list.length > count  ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore} >Cargar mas</Button>
      </div>
   
    ) : null)

 function setDatos(e){
  setId(e)
  const eventoFiltrado= eventos.filter(ev => ev.id === e)
  setValues(eventoFiltrado[0]);
/*   console.log(eventoFiltrado[0])
  console.log(inicialValues) */
 }


/*   function buscarNombre(e){
    console.log(e.target.value)
    setName(e.target.value)
  } */

  useEffect(() => {
    setCurrentPage(0);
  }, [eventos]);


/*    useEffect (()=>{
    dispatch(getEventsName(nameEvent));
  },[dispatch, nameEvent]) 

  useEffect (()=>{
    dispatch(getEvents());
  },[dispatch]) 
 
 */


  
 
  
  const onFinish = (values) => {
    /* console.log('Received values of form: ', values); */
    if(values.dias){
 /*      console.log(values.dias[0]) */
      let diaIn=(values.dias[0].$d).toString()
      let diaInicio=diaIn.slice(4,15)
      let diaF=(values.dias[1].$d).toString()
      let diaFin=diaF.slice(4,15)

    let valores={
      name:values.username || inicialValues.name,
      startDay:diaInicio || inicialValues.startDay,
      endDay:diaFin || inicialValues.endDay,
      price: values.precio || inicialValues.price,
      img:values.upload || inicialValues.img,
      information:values.description || inicialValues.information,
      guide:values.selectGuia || inicialValues.guide,
      availability:values.availability || inicialValues.availability,
      category:values.select || inicialValues.category
      }

    setValues({
    name:values.username,
    startDay:diaInicio,
    endDay:diaFin,
    price: values.precio,
    img:values.upload,
    availability:values.availability,
    information:values.description,
    guide:[{name:values.selectGuia}],
    category:[{name:values.select}]
    })
    Swal.fire({
      title: 'Éxito',
      text: 'Tu evento se modificó con éxito',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: "#035d03"

      
    }) 
    var form = true;

    if (form) {
      dispatch(putEvent(valores, id))

    } else {
      return Swal.fire({
        title: 'Upss!',
        text: 'A tu actividad le faltan detalles',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: "#035d03"
      }) 
    }

    } else {
      let valores={
        name:values.username || inicialValues.name,
        price: values.precio || inicialValues.price,
        img:values.upload || inicialValues.img,
        information:values.description || inicialValues.information,
        guide:values.selectGuia || inicialValues.guide,
        availability:values.availability || inicialValues.availability,
        category:values.select || inicialValues.category
        }
  
      setValues({
      name:values.username,
      price: values.precio,
      img:values.upload,
      availability:values.availability,
      information:values.description,
      guide:[{name:values.selectGuia}],
      category:[{name:values.select}]
      })
      Swal.fire({
        title: 'Éxito',
        text: 'Tu evento se modificó con éxito',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: "#035d03"
      }) 

    
    form = true;
    if (form) {
      dispatch(putEvent(valores, id))

    } else {
      return Swal.fire({
        title: 'Upss!',
        text: 'A tu actividad le faltan detalles',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: "#035d03"
      }) 
    }

    }
      


    

  };
  
  const onFinishFailed = (errorInfo) => {
    /*   console.log('Failed:', errorInfo); */
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
  


return(
  <div className='contenedor-form'>
 
    <h3 className='titulo-form-evento'>Modificar Evento</h3>
    <hr></hr>

    {/* <Form.Item
      label="Buscar"
      name="username-buscado"
    >
      <Input placeholder={nameEvent} onChange={(e)=>buscarNombre(e)}/>
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
    </div> 
    </Form.Item>*/}


    <hr></hr>
    <div>
      
    <Form.Item
      label="Buscar"
      name="username-buscado"
    >
      <Input placeholder={nameEvent} onChange={(e)=>buscarNombre(e)}/>
     
    </Form.Item>

    <List
      className="demo-loadmore-list "
      loading={initLoading}
     itemLayout="horizontal"
      /* loadMore={loadMore} */
      dataSource={list.slice(0,count)}
      
      renderItem={(item) => (
        <List.Item>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
            className='lista-eventos-small'
              avatar={<Avatar src={item.img} />}
              title={item.name}
              
            />
           
            <Button clasName="boton-datos"onClick={()=>setDatos(item.id)}>Datos</Button>
           
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
      <Select placeholder={inicialValues.category[0].name}/*  defaultValue={inicialValues.category[0].name} */>
    
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
      <Select placeholder={inicialValues.guide[0].name} /* defaultValue={inicialValues.guide[0].name} */>
    
    <Option value="Claudio">Claudio</Option>
    <Option value="Karen">Karen</Option>
    <Option value="Soledad">Soledad</Option>
    <Option value="Martin">Martin</Option>
  </Select>
    </Form.Item> 


    <Form.Item label="Precio">
      <Form.Item name="precio" noStyle
     >
        <InputNumber  min={1} placeholder={inicialValues.price} /* defaultValue={inicialValues.price} *//>
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
      <Input type='file' />
    </Form.Item>


    <Form.Item label="Cupos">
      <Form.Item name="availability" noStyle
     >
        <InputNumber  min={1} placeholder={inicialValues.availability}/>
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
        value={inicialValues.information}
        placeholder={inicialValues.information}
       /*  defaultValue={inicialValues.information} */
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