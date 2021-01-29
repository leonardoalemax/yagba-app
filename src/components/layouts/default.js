import styled from 'styled-components';
import "antd/dist/antd.css";


const Layout = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.section`
  width: calc(100% - 16px);
  max-width: 1280px;
  margin: 8px;
`;

const DefaultLayout = ({children}) => {
  return (
    <Layout>
      <Content>
        {children}
      </Content>
    </Layout>
  );
}

export default DefaultLayout;
