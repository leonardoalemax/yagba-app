import styled from 'styled-components';

import { Input } from 'antd';

import BackgroundImg from '../images/background.jpg';

export const Illustration = styled.img`
  width: 160px;
  filter: drop-shadow(0 -2mm 2mm rgb(2,20,134));
`;

export const SearchInput = styled(Input.Search)`
  margin: 20px 0px;
`;

export const Hero = styled.div`
  @keyframes parallax {
    from {background-position:0% 0%;}
    to {background-position:100% 0%;}
  }

  width: 100%;
  background-image: url(${BackgroundImg});
  background-blend-mode: multiply;
  background-color: #001529;
  text-align: center;
  padding: 24px;
  animation: parallax 20s infinite;

  h2 {
    color: #fff;
  }
`;

export const Content = styled.section`
  width: calc(100% - 16px);
  max-width: 1280px;
  margin: 8px;
  padding: 20px;
  border-radius: 6px;
`;

export const Layout = styled.section`
  display: flex;
  align-items: center;
  background-color: #fff;
  flex-direction: column;
  min-height: calc(100vh - 64px);
  height: 100%;
`;