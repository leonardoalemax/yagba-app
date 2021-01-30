import styled from 'styled-components';
import { Image, Skeleton } from 'antd';

export const ImageStyled = styled(Image)`
  border: 4px solid #001529;
  filter: drop-shadow(0 -2mm 2mm rgb(0, 0, 0));
  width: 160px;
`;

export const ImageSkeleton = styled(Skeleton.Image)`
  border: 4px solid #001529;
  filter: drop-shadow(0 -2mm 2mm rgb(0, 0, 0));
  width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 100% !important;
  height: 220px !important;

  > div {
    border: none;
  }
`;

export const Cover = ({image}) => <ImageStyled src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${image}.jpg`}/>

export const TagLine = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  border-top: 1px dotted #aeaeae;
  padding: 2px;

  span {
    margin: 2px;
  }
`;

export const Description = styled.small`
  width: 60px;
  display: block;
  float: left;
  margin: 4px 8px;
`;

export const Detail = styled.div`
 
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
  background-color: #001529;
  background-image: ${(e) => `url(${e.src})`};

  aside {
    margin-top: -80px;
    width: 160px;
  }

  section {
    margin-top: -100px;
    padding: 16px;
    width: calc(100% - 144px);
  }
`;

export const Data = styled.div`
  display: flex;
  padding: 0px 16px;
  width: 100%;
  background: #fff;
  margin-top: 180px;

  h2, h3 {
    margin-bottom: 0px;
  }
`;

export const Title = styled.div`
  display: block;
  height: 100px;
  padding: 0px 8px;
  width: 100%;
  h5{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  h2, h3, h5, p {
    color: #fff;
  }
`;





