
import { Button, Tag, Collapse, Dropdown, Menu, Skeleton } from 'antd';
import { Detail, Title, Cover, Data, TagLine, ImageSkeleton, Description } from '../styles/Game';
import { CalendarOutlined, BorderOutlined} from '@ant-design/icons'

const { Panel } = Collapse;

const TagList = (list, key) => (
  <Menu>
    {list?.map(e =>  (
      <Menu.Item key={e[key]}> <BorderOutlined /> {e[key]}</Menu.Item>
    ))}
  </Menu>
)

const GameDetail = ({
  cover,
  name,
  franchises,
  game_modes,
  genres,
  platforms,
  themes,
  collection,
  screenshots,
  game_engines,
  release_dates,
  involved_companies,
  storyline,
  summary,
  loading
}) => {
  return (
    <Detail src={screenshots ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${screenshots[0]?.image_id}.jpg` : ''}>
      <Data>
        <aside>

          { loading ? <ImageSkeleton /> : <Cover image={cover?.image_id}></Cover> }

          <Dropdown overlay={TagList(platforms, 'name')} placement="bottomLeft">
            <Button block>Add to library</Button>
          </Dropdown>
        </aside>
        <section>
          <Title>
            { 
              loading ? <Skeleton paragraph={{ rows: 1 }} active /> : <> 
                <h2>{name}</h2>
                <h5>
                  <CalendarOutlined style={{paddingRight:'4px'}} />
                  {`${release_dates && release_dates[0].human}`} 
                </h5>
                <h5>
                  {involved_companies?.map(e => e.company.name).join(' / ')}
                </h5>
              </>
            }
          </Title>

          { loading ? <Skeleton active /> : <>
            { franchises && <TagLine>
              <Description>Franchises :</Description>
              {franchises?.map(e => <Tag color="magenta">{e.name}</Tag>)}
            </TagLine> }
            { game_engines && <TagLine>
              <Description>Engines :</Description>
              {game_engines?.map(e => <Tag color="red">{e.name}</Tag>)}
            </TagLine>}
            { game_modes && <TagLine>
              <Description>Modes :</Description>
              {game_modes?.map(e => <Tag color="volcano">{e.name}</Tag>)}
            </TagLine> }
            { genres && <TagLine>
              <Description>Genres :</Description>
              {genres?.map(e => <Tag color="blue">{e.name}</Tag>)}
            </TagLine>}
            {themes && <TagLine>
              <Description>Themes :</Description>
              {themes?.map(e => <Tag color="geekblue">{e.name}</Tag>)}
            </TagLine>}
            {collection && <TagLine>
              <Description>Collection :</Description>
              <Tag color="purple">{collection.name}</Tag>
            </TagLine>}
          </>}
          <hr/>
          { !loading  && 
            <Collapse collapsible="header">
              {summary && <Panel header="Summary" key="summary">
                <p>{summary}</p>
              </Panel>}
              {storyline && <Panel header="Plot" key="storyline">
                <p>{storyline}</p>
              </Panel>}
            </Collapse>
          }
        </section>
      </Data>
    </Detail> 
  )
}

export default GameDetail