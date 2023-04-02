import styled from 'styled-components';

import RightArrow from '../../assets/right_arrow.svg';
import S from '../../assets/S.svg';
import A from '../../assets/A.svg';
import { Form } from '../Form/Form';
import { MainTitle } from '../MainTitle/MainTitle';
import { SubTitle } from '../SubTitle/SubTitle';

export const AboutUs = () => {
  return (
    <AboutUsStyle>
      <Container>
        <div>
          <MainTitle text="О нас" />
          <GrayBlock>
            <ImgS className='asideButton' src={S} />
            <Description>
              Разнообразный и богатый опыт говорит нам, что реализация
              намеченных плановых заданий однозначно определяет каждого
              участника как способного принимать собственные решения касаемо
              переосмысления внешнеэкономических политик. Противоположная точка
              зрения подразумевает, что независимые государства могут быть
              описаны максимально подробно. В рамках спецификации современных
              стандартов, интерактивные прототипы, вне зависимости от их уровня,
              должны быть ограничены исключительно образом мышления.
            </Description>
            <Description>
              Разнообразный и богатый опыт говорит нам, что реализация
              намеченных плановых заданий однозначно определяет каждого
              участника как способного принимать собственные решения касаемо
              переосмысления внешнеэкономических политик. Противоположная точка
              зрения подразумевает, что независимые государства могут быть
              описаны максимально подробно. В рамках спецификации современных
              стандартов, интерактивные прототипы, вне зависимости от их уровня,
              должны быть ограничены исключительно образом мышления.
            </Description>
            <Img src={RightArrow} />
          </GrayBlock>
        </div>
        <div>
          <SubTitle text="Наши ценности" />
          <Wrapper>
            <GrayBlockMini>
              <BlockTitle>Открытость</BlockTitle>
              <BlockDescription>
                Разнообразный и богатый опыт говорит нам, что реализация
                намеченных плановых заданий однозначно
              </BlockDescription>
            </GrayBlockMini>
            <GrayBlockMini>
              <BlockTitle>Развитие</BlockTitle>
              <BlockDescription>
                Разнообразный и богатый опыт говорит нам, что реализация
                намеченных плановых заданий однозначно
              </BlockDescription>
            </GrayBlockMini>
            <GrayBlockMini>
              <BlockTitle>Свобода</BlockTitle>
              <BlockDescription>
                Разнообразный и богатый опыт говорит нам, что реализация
                намеченных плановых заданий однозначно
              </BlockDescription>
            </GrayBlockMini>
            <GrayBlockMini>
              <BlockTitle>Ответственность</BlockTitle>
              <BlockDescription>
                Разнообразный и богатый опыт говорит нам, что реализация
                намеченных плановых заданий однозначно
              </BlockDescription>
            </GrayBlockMini>
            <GrayBlockMini>
              <BlockTitle>Увлеченность</BlockTitle>
              <BlockDescription>
                Разнообразный и богатый опыт говорит нам, что реализация
                намеченных плановых заданий однозначно
              </BlockDescription>
            </GrayBlockMini>
          </Wrapper>
        </div>
        <RelativeBlock className='relative'>
          <SubTitle text="Стань частью нашей команды" />
          <Form text='Если у тебя есть желание присоединиться к нам, то смело заполняй форму!' />
          <ImgA className='asideButton' src={A} />
        </RelativeBlock>
      </Container>
    </AboutUsStyle>
  );
};

const AboutUsStyle = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  // position: "relative",
  gap: '60px',
});

const Container = styled.div({
  // backgroundColor: "#F7F7F8",
  width: '100%',
  maxWidth: '1224px',
  // height: "442px",
  // borderRadius: "20px",
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  // justifyContent: "space-around",

  '@media(max-width: 600px)': {
    gap: '0',
  },
});

const Img = styled.img({
  position: 'absolute',
  left: '-172px',
  top: '123px',

  '@media(max-width: 1580px)': {
    display: 'none',
  },
});

const ImgS = styled.img({
  position: 'absolute',
  right: '-46px',
  top: '-51px',
  transform: 'rotate(322deg)',

  '@media(max-width: 1340px)': {
    right: '-10px',
    top: '-23px',
  },
});

const ImgA = styled.img({
  position: 'absolute',
  bottom: '-47px',
  left: '-56px',

  '@media(max-width: 1340px)': {
    bottom: '-10px',
    left: '-20px',
  },
});

const GrayBlock = styled.div({
  width: '100%',
  maxWidth: '1224px',
  padding: '48px 104px',
  backgroundColor: '#F7F7F8',
  borderRadius: '20px',
  display: 'flex',
  gap: '12px',
  flexDirection: 'column',
  position: 'relative',

  '@media(max-width: 1024px)': {
    padding: '24px',
  },
});

const GrayBlockMini = styled.div({
  width: '100%',
  maxWidth: '392px',
  padding: '24px 24px',
  backgroundColor: '#F7F7F8',
  borderRadius: '20px',
  boxShadow: '16px 16px 0px #FFCD4C',
  display: 'flex',
  gap: '12px',
  flexDirection: 'column',
});

const Wrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '24px',
});

const BlockTitle = styled.div({
  fontSize: '30px',
  fontWeight: '600',
  color: '#0B0D22',

  "@media(max-width: 820px)": {
    fontSize: "24px",
  },
});

const Description = styled.div({
  color: '#0B0D22',
  fontSize: '18px',
});

const BlockDescription = styled.div({
  color: '#0B0D22',
  fontSize: '18px',
});

const RelativeBlock = styled.div`
  @media only screen and (max-width: 600px) {
    margin-top: 40px;
  }
`;
