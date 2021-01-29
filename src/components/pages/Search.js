import DefaultLayout from '../layouts/default';
import { Input, List, Avatar, Tag, Button, Modal } from 'antd';
import { PlusOutlined, CalendarOutlined } from '@ant-design/icons';
import useSearchGame from '../hooks/useSearchGame';
import { compact , uniq } from 'lodash';
import { useState } from 'react';

import styled from 'styled-components';

const Date = styled.span`
  padding: 0px 8px;
`;

const Search = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {setSearchTerm, result} = useSearchGame()

  const onChange = (e) => {
    setSearchTerm(e)
  }

  const platforms = (list) =>{
    const itens = uniq(compact(list.map(e => e.platform_family?.name)))
    return itens.map((p) => <Tag key={p} color="blue">{p}</Tag>)
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
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.cover ? item.cover.url : 'https://picsum.photos/200/200'} />}
                  title={item.name}
                  description={(<>
                    <CalendarOutlined />
                    <Date>
                      {`${item.release_dates && item.release_dates[0].human}`} 
                    </Date>
                    {item.platforms && platforms(item.platforms)}
                  </>)}
                />
                <Button type="primary" shape="round" onClick={() => { addGame(item.id) }} icon={<PlusOutlined />} size='large' />
              </List.Item>
            )}
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
