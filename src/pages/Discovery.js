import { List, Modal } from 'antd';

import { Layout, Content, Hero, Illustration, SearchInput } from '../styles/Discovery';

import useSearchGame from '../hooks/useSearchGame';
import useGameDetail from '../hooks/useGameDetail';
import GameDetail from '../components/GameDetail';
import GameSearchResult from '../components/GameSearchResult';
import DiscoverySVG from '../images/discovery.svg';

import { useState } from 'react';


const Discovery = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {setSearchTerm, result} = useSearchGame();
  const {setId, detail, detailLoading} = useGameDetail();

  const onChange = (e) => {
    setSearchTerm(e)
  }

  const addGame = (id) => {
    setId(id)
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (<Layout>
      <Hero>
        <Illustration alt="Discover Games" src={DiscoverySVG} />
        <h2>Dicover new games!</h2>
      </Hero>
      <Content>
        <SearchInput placeholder="search game" enterButton onSearch={onChange} />

        <List itemLayout="horizontal"
              dataSource={result}
              renderItem={item => <GameSearchResult item={item} onClick={addGame} />}
        />
      </Content>
      
      <Modal width={720} footer={null} bodyStyle={{padding:"0px"}} visible={isModalVisible} onCancel={handleCancel}>
        <GameDetail {...detail} loading={detailLoading} />
      </Modal>
    </Layout>
  );
}

export default Discovery;
