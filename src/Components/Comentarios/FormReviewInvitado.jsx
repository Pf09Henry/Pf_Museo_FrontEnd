import React, {useState} from "react";
import {
    Button,
     Form,
    Input,
    Rate,
  
  } from 'antd';



export default function FormReviewInvitado(){


        const [componentDisabled, setComponentDisabled] = useState(true);
      
        const { TextArea } = Input;



    return(
        <div>
        
            <Form
           
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
                
                autoComplete="off"
            >


            <Form.Item
            
            name="score"
            >
            <Rate disabled={componentDisabled} defaultValue="3" />
            
            </Form.Item>

            <Form.Item name="comentario">
            <TextArea
                showCount
                maxLength={600}
                style={{
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