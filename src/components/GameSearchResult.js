import { List, Avatar, Button } from 'antd';
import { EyeOutlined } from '@ant-design/icons';

const GameSearchResult = ({item, onClick}) => {
  const {id, cover, name, release_dates} = item;

  return (<List.Item>
  <List.Item.Meta
    avatar={<Avatar src={cover ? cover.url : 'https://picsum.photos/200/200'} />}
    title={<h2> {name} <small> ({`${release_dates && release_dates[0].y}`})</small></h2>}
  />
  <Button type="primary" shape="round" onClick={() => { onClick(id) }} icon={<EyeOutlined />} size='large' />
</List.Item>)
}

export default GameSearchResult