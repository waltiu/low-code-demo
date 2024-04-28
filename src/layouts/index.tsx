import React, { Suspense, useState } from 'react';
import { Layout, Menu } from 'antd';
import { MenuItem, getMenus } from './constant';
import { history } from 'umi';
import './index.scss'

const { Header, Content, Footer, Sider } = Layout;


const LayoutConatiner: React.FC = ({ children }) => {

  const [collapsed, setCollapsed] = useState(false);

  const onMenuItemClick = (menu: MenuItem) => {
    history.push(menu?.key as string)
  }
  const menusItems = getMenus()
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={[menusItems[0]?.key as string]} mode="inline" items={menusItems} onClick={onMenuItemClick} />
      </Sider>
      <Layout>
        <Header />
        <Content >
          <div
            className='outlet-container'
          >
            <Suspense fallback={<div>Loading...</div>}>
              {children}
            </Suspense>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutConatiner;