import React, { useState } from 'react'
import { Button, Form, Input, Row, Col } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons'
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postMail } from '../../Actions/AppActions/appActions';
import './../Login/Login.css'
const { TextArea } = Input

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

export default function FormContact() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [data, setData] = useState({
        name: '',
        email: '',
        asunto: '',
        mensaje: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    function handleSubmit() {
        console.log(data)
        setData({
            name: data.name,
            email: data.email,
            asunto: data.asunto,
            mensaje: data.mensaje,
        })
        let mailer = {
            mail: 'pf09henry@gmail.com',
            subject: data.asunto,
            message: data.name + " se acaba de comunicar, y quiere que lo contactemos mediante el mail: " + data.email + "\n Su mensaje fue: " + data.mensaje,
        };
        dispatch(postMail(mailer))
        Swal.fire({
            title: 'Éxito',
            text: 'Nos contactaremos en la brevedad posible con usted.',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: "#035d03"
        }).then(navigate('/'))
    }
    return (
        <div className="contenedor-form">
            <h3>Contactanos</h3>
            <Form
                {...formItemLayout}
                form={form}
                name="Contact"
                className="login-form"
                onFinish={handleSubmit}
                initialValues={{
                    email: data.email,
                    name: data.name,
                    asunto: data.asunto,
                    message: data.mensaje,
                }}
                style={{
                    
                }}
                scrollToFirstError
            >

                <Form.Item
                    label="Don't fill this out"
                    className={`hidden`}
                    style={{ display: `none` }}
                    name="bot-field"
                >
                    <Input type={`hidden`} />
                </Form.Item>

                <Form.Item
                    label="Nombre"
                    rules={[{ required: true, message: `Por favor ingresa tu nombre.` }]}
                    name="name"
                >
                    <Input
                        placeholder="Nombre Completo"
                        type='text'
                        name='name'
                        value={data.name}
                        onChange={handleChange}
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                </Form.Item>

                <Form.Item
                    label="E-mail "
                    rules={[{ required: true, type: `email`, message: `Por favor ingresa tu email.` }]}
                    name="email"
                >
                    <Input
                        placeholder="Tu Correo Electronico"
                        type='email'
                        name='email'
                        value={data.email}
                        onChange={handleChange}
                        prefix={<MailOutlined className="site-form-item-icon" />}
                    />
                </Form.Item>

                <Form.Item
                    label="Asunto"
                    rules={[{ required: true, message: `Por favor ingresa el asunto.` }]}
                    name="asunto"
                >
                    <Input
                        placeholder="Asunto"
                        type='text'
                        name='asunto'
                        value={data.asunto}
                        onChange={handleChange}
                    />
                </Form.Item>

                <Form.Item
                    label="Mensaje"
                    rules={[{ required: true, message: `Escribe tu mensaje.` }]}
                    name="mensaje"
                >
                    <TextArea
                        placeholder="Tu Mensaje..."
                        type='text'
                        name='mensaje'
                        value={data.mensaje}
                        onChange={handleChange}
                        rows={5}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" className="btn-primary" htmlType="submit" disabled={false}>
                        Enviar
                    </Button>
                </Form.Item>
            </Form>
        </div >
    )
}
