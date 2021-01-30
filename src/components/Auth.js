import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Button, Affix, Tabs} from 'antd';
import { UserOutlined } from '@ant-design/icons';

import SingUpForm from './SingUpForm';
import SingInForm from './SingInForm';


const { TabPane } = Tabs;

const ButtonStyled = styled(Button)`
  min-width: 64px;
  height: 64px;

  span {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    svg {
      width: 100%;
    }
  }

`;

const Auth = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bottom] = useState(10);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return(<>
      <Affix style={{ position: 'fixed', left: 'calc(100vw - 72px)' }} 
             size="large" offsetBottom={bottom}>
        <ButtonStyled type="primary" shape="circle" onClick={showModal}>
          <UserOutlined />
        </ButtonStyled>
      </Affix>
      <Modal visible={isModalVisible} footer={null} 
             onOk={handleOk} onCancel={handleCancel}>
        
        <Tabs defaultActiveKey="1">
          <TabPane tab="Sing In" key="1">
            <SingInForm />
          </TabPane>
          <TabPane tab="Sing Up" key="2">
            <SingUpForm />
          </TabPane>
        </Tabs>
        
      </Modal>
    </>
  );
}

export default Auth;
