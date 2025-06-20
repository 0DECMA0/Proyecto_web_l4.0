import React from 'react';
import { Form, Input, Button } from 'antd';

const App: React.FC = () => {
  const handleSubmit = () => {
    console.log('Enviar formulario');
  };

  return (
    <Form>
      <Form.Item label="Username" name="username" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" onClick={handleSubmit}>
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
