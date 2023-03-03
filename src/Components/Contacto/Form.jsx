import React, { createRef, useState } from "react";
import axios from "axios";
import "./Form.css";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, InputNumber } from "antd";
//import { useLocation } from 'react-router-dom';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const submit = (e) => {
  e.preventDefault();
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} es requerido!",
  types: {
    email: "${label} no se valido el email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const App = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    
    console.log(values);
    swal({
      title: "Gracias por contactarnos!",
      icon: "success",
    }).then(() => {});

    formRef.current.resetFields();
    navigate("/");
  };
  const formRef = createRef();

  return (
    <Form
      ref={formRef}
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      initialValues={{
        user: { asunto: "", email: "", mensaje: "", nombre: "" },
      }}
      style={{
        maxWidth: 1470,
        marginTop: 60,
      }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "nombre"]}
        label="Nombre"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[
          {
            required: true,
            type: "email",
          },
        ]}
      >
        {/* <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'age']}
      label="Age"
      rules={[
        {
          type: 'number',
          min: 0,
          max: 99,
          required: true,
        },
      ]}
    > */}
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "asunto"]}
        label="Asunto"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "mensaje"]}
        label="Mensaje"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea autoSize={{ minRows: 13, maxRows: 13 }} />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
