import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {  useParams } from "react-router-dom";
import { getReview, getUsers, postReview } from "../../Actions/AppActions/appActions";
import Swal from 'sweetalert2'
import {
    Button,
     Form,
    Input,
    Rate,
  
  } from 'antd';
import './FormReview.css'
import { right } from "@popperjs/core";


export default function FormReview({user, idEvent}){

    const usuarios = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const [form, setForm ] = useState({
        commentary:"",
        score:3,
        userId:"",
        eventId:""
    })
    const { TextArea } = Input;

  



    let { id } = useParams();
    console.log(id)
    useEffect (()=>{
        dispatch(getUsers());
    },[dispatch]) 

    function searchIdUser(name){
        console.log(usuarios)
        let usuarioEncontrado = usuarios.filter(el => el.name === name)
        console.log(usuarioEncontrado[0].id)
        return usuarioEncontrado[0].id
    }

    function inputStar(value){
        setForm({
            score:value
        })
        console.log(value)
    }

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
     
        let valores={
            commentary:values.comentario,
            score:values.score,
            userId:searchIdUser(user.name),
            eventId:id
          }
          console.log(valores)
        
        setForm({
            commentary:values.comentario,
            score:values.score,
            userId:searchIdUser(user.name),
            eventId:id
        })
        Swal.fire({
          title: 'Éxito',
          text: 'Tu puntaje y comentario se enviaron con éxito!',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(function(){
            window.location.href = `/event/${idEvent}`
        })
     
    
    
        var form = true;
    
        if (form) {
        dispatch(postReview(valores))
        }
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
        <div>
        
            <Form
                className="form-review"
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
            style={{
            width:200,
        
            }}
            name="score"
            rules={[
                {
                  required: true,
                  message: 'Por favor dejá un puntaje',
                },
              ]}
            >
            <Rate  defaultValue={form.score} onChange={(value)=>inputStar(value)}/>
            
            </Form.Item>

            <Form.Item name="comentario"     rules={[
                    {
                      required: true,
                      message: 'Por favor dejá un comentario',
                    },
                  ]}>
            <TextArea
                showCount
                maxLength={600}
                style={{
                width:200,
                height: 120,
                marginBottom: 24,
                }}
            
                placeholder="Dejanos tu comenatrio"
            />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    span: 12,
                    offset: 6,
                }}
                >
                <Button type="primary" htmlType="submit" className='btn-secundario' style={{backgroundColor:"rgb(56, 102, 103"}}>
                Enviar
                </Button>
                </Form.Item>

            </Form>
        </div>
    )
}