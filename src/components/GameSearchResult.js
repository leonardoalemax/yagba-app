import styled from 'styled-components';

import { compact , uniq } from 'lodash';

import { List, Avatar, Button, Tag } from 'antd';
import { PlusOutlined, CalendarOutlined } from '@ant-design/icons';


const Date = styled.span`
  padding: 0px 8px;
`;

const GameSearchResult = ({item, onClick}) => {
  const {id, cover, name, release_dates, platforms} = item;

  

  const platformsParser = (list) =>{
    const itens = uniq(compact(list.map(e => e.platform_family?.name)))
    return itens.map((p) => <Tag key={p} color="blue">{p}</Tag>)
  }

  return (<List.Item>
  <List.Item.Meta
    avatar={<Avatar src={cover ? cover.url : 'https://picsum.photos/200/200'} />}
    title={name}
    description={(<>
      <CalendarOutlined />
      <Date>
        {`${release_dates && release_dates[0].human}`} 
      </Date>
      {platforms && platformsParser(platforms)}
    </>)}
  />
  <Button type="primary" shape="round" onClick={() => { onClick(id) }} icon={<PlusOutlined />} size='large' />
</List.Item>)
}

export default GameSearchResult