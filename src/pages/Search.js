
import { Input, List, Modal } from 'antd';

import useSearchGame from '../hooks/useSearchGame';

import GameSearchResult from '../components/GameSearchResult';
import DefaultLayout from '../layouts/default';

import { useState } from 'react';


const Search = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {setSearchTerm, result} = useSearchGame()

  const onChange = (e) => {
    setSearchTerm(e)
  }

  const addGame = (id) => {
    console.log(id)
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (<DefaultLayout>
      <Input.Search placeholder="search game" enterButton onSearch={onChange} />

      <List itemLayout="horizontal"
            dataSource={result}
            renderItem={item => <GameSearchResult item={item} onClick={addGame} />}
      />
      <Modal title="Basic Modal" visible={isModalVisible} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </DefaultLayout>
  );
}

export default Search;
