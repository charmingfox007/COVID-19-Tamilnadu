import React from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Typography } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import CustomMap from './Components/MapComponent/Map'
const { SubMenu } = Menu;
const { Title } = Typography
const { Header, Sider, Content } = Layout;

function App() {
  const [currentMap, setMap] = React.useState('Affected areas');
  return (
    <div className="App">
      <Layout >
        <Header style={{ backgroundColor: '#6A5ACD' }}>
          <Title level={4} style={{ color: 'white', paddingTop: '16px' }} >
            COVID-19 Tracker TamilNadu
       </Title></Header>
        <Layout>
          <Sider style={{ backgroundColor: '#F0F8FF' }}>
            <Menu defaultSelectedKeys={['affected']}
              mode="inline">
              <Menu.Item key="testingCenters" onClick={() => setMap("Testing Centers")}>
                Testing Centers</Menu.Item>
              <Menu.Item key="affected" onClick={() => setMap("Affected areas")}>Affected areas</Menu.Item>
              <SubMenu key="sub1"
                title={
                  <span>
                    <MailOutlined />
                    <span>Emergency Contact</span>
                  </span>}>
                <Menu.Item>
                  <span>
                    <PhoneOutlined />
                    <span>044-29510500</span>
                  </span></Menu.Item>
                <Menu.Item>
                  <span>
                    <MailOutlined />
                    <span>ncov2019@gmail.com</span>
                  </span></Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ backgroundColor: '#F5F5F5' }}>
            <Breadcrumb style={{ margin: '15px 15px 0px' }}>
              <Breadcrumb.Item>{currentMap}</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 15,
                margin: 0,
                minHeight: 400,
              }}
            >
              <CustomMap
                isDefaultMap={currentMap}
              />
            </Content>
          </Layout>
        </Layout>

      </Layout>

    </div>
  );
}

export default App;
