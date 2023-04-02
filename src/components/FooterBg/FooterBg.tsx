import styled from 'styled-components';
import clouds from '../../assets/clouds.svg';
import cloudsSmall from '../../assets/clouds-small.png';

export const FooterBg = () => {
  return <Img />;
};

const Img = styled.div`
  position: absolute;
  bottom: -150px;
  overflow: hidden;

  width: 100%;
  height: 400px;

  background-image: url('${clouds}');
  background-repeat: no-repeat;
  background-position: bottom center;

  @media only screen and (max-width: 820px) {
    bottom: -57px;
    height: 200px;
    background-position: center;
  }
`;