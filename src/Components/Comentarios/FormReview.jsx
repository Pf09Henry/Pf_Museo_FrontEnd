import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
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


export default function FormReview({ user, idEvent }) {

    const usuarios = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        commentary: "",
        score: 3,
        userId: "",
        eventId: ""
    })
    const { TextArea } = Input;





    let { id } = useParams();
    


    useEffect(() => {
        dispatch(getUsers());
        searchIdUser()
    }, [dispatch])

    function searchIdUser() {
        
        let usuarioEncontrado = usuarios.filter(el => el.email === user.email)
        
        return usuarioEncontrado[0].id
    }

    function inputStar(value) {
        setForm({
            score: value
        })
        
    }

    const onFinish = (values) => {
        

        let valores = {
            commentary: values.comentario,
            score: values.score,
            userId: searchIdUser(),
            eventId: id
        }
        

        setForm({
            commentary: values.comentario,
            score: values.score,
            userId: searchIdUser(),
            eventId: id
        })
        Swal.fire({
            title: 'Éxito',
            text: 'Tu puntaje y comentario se enviaron con éxito!',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: "#035d03"
        }).then(function () {
            window.location.href = `/event/${idEvent}`
        })



        var form = true;

        if (form) {
            dispatch(postReview(valores))
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


    /*    function searchIdUser(user){
          
          let usuarioEncontrado = usuarios.filter(el => el.email === user.email)
  
          return usuarioEncontrado[0].id
  
      } */



    return (
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
                        width: 200,

                    }}
                    name="score"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor dejá un puntaje',
                        },
                    ]}
                >
                    <Rate className='rate' defaultValue={form.score} onChange={(value) => inputStar(value)} />

                </Form.Item>

                <Form.Item name="comentario" rules={[
                    {
                        required: true,
                        message: 'Por favor dejá un comentario',
                    },
                ]}>
                    <TextArea
                        showCount
                        maxLength={600}
                        style={{
                            width: 250,
                            height: 120,
                            marginBottom: 24,
                            marginLeft: -60
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
                    <Button type="primary" htmlType="submit" className='btn-secundario' style={{ backgroundColor: "rgb(56, 102, 103", marginLeft: -30 }}>
                        Enviar
                    </Button>
                </Form.Item>

            </Form>
        </div>
    )
}