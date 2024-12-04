import { Button, Col, Form, Input, Row, Table } from 'antd';
import useUsers from '../hooks/useUsers';
import userType from '../types/user';

export default function UserForm() {
  const { users, columns, addUsers } = useUsers();

  const onFinish = (user: userType) => {
    addUsers(user);
  };

  return (
    <Row>
      <Col span={6} style={{ textAlign: 'center' }}>
        <Form layout="vertical" onFinish={onFinish} variant="filled">
          <Form.Item label="Name" name="firstname">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Last Name" name="lastname">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Identification Number" name="id">
            <Input type="text" />
          </Form.Item>
          <Form.Item style={{ textAlign: 'left' }}>
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col span={18} style={{ paddingLeft: 10, marginTop: 30 }}>
        <Table showHeader={true} dataSource={users} columns={columns}></Table>
      </Col>
    </Row>
  );
}
