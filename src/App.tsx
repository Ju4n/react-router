import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
import { useState } from 'react';
import Main from './components/Main';
import MainMenu from './components/MainMenu';

const { Header, Content, Sider, Footer } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider style={{ borderTopLeftRadius: 10 }}>
        <MainMenu />
      </Sider>
      <Layout style={{ borderRadius: 10 }}>
        <Header style={{ borderTopRightRadius: 10 }}></Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 700,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Main />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Juan ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
