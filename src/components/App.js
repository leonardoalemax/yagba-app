import { useState } from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import "antd/dist/antd.css";
import Discovery from '../pages/Discovery';
import Auth from './Auth';

const { Header, Content } = Layout;

const LayoutStyled = styled(Layout)`
  height: 100%;
  min-height: 100vh;
`;

const Title = styled.h3`
  float: left;
  margin: 0px;
  color: #fff;
  padding: 0px 20px;
`;

const App = () => {
  const [view, setView] = useState('discovery');

  return (
    <LayoutStyled>
      <Header>
        <Title>Ya!GBA</Title>
        <Menu theme="dark" mode="horizontal" onClick={(e) => {setView(e.key)}} defaultSelectedKeys={['discovery']}>
          <Menu.Item key="discovery">Discover</Menu.Item>
          <Menu.Item key="dashboard">Insights</Menu.Item>
          <Menu.Item key="backlog">Backlog</Menu.Item>
         
        </Menu>
      </Header>
      <Content>
        { view === 'discovery' && <Discovery /> }  
        <Auth />
      </Content>
    </LayoutStyled>
  );
}

export default App;
