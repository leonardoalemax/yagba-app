import { useState } from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import "antd/dist/antd.css";
import Search from '../pages/Search';

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
  const [view, setView] = useState('search');

  return (
    <LayoutStyled>
      <Header>
        <Title>Ya!GBA</Title>
        <Menu theme="dark" mode="horizontal" onClick={(e) => {setView(e.key)}} defaultSelectedKeys={['search']}>
          <Menu.Item key="search">Search</Menu.Item>
          <Menu.Item key="dashboard">Dashboard</Menu.Item>
          <Menu.Item key="backlog">Backlog</Menu.Item>
        </Menu>
      </Header>
      <Content>
        { view === 'search' && <Search /> }
      </Content>
    </LayoutStyled>
  );
}

export default App;
