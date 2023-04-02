import styled from 'styled-components';

import GameBanner from '../../assets/gameBanner.png';
import GameBanner720 from '../../assets/gameBanner720.png';
import GameBanner320 from '../../assets/gameBanner320.png';
import S from '../../assets/S.svg';
import A from '../../assets/A.svg';
import { Form } from '../Form/Form';

import Map from '../../assets/map.png';
import Cat from '../../assets/cat.png';
import Science from '../../assets/science.png';
import House from '../../assets/house.png';
import RightArrow from '../../assets/right_arrow.svg';
import LeftArrow from '../../assets/left_arrow.svg';

import BackgroundGame from '../../assets/backgroundGame.png';
import BackgroundGame760 from '../../assets/backgroundGame760.png';
import BackgroundGame320 from '../../assets/backgroundGame320.png';
import GG from '../../assets/GG.png';
import Captain from '../../assets/captain.png';
import CatQuery from '../../assets/catQuery.png';
import Captain760 from '../../assets/captain760.png';
import Captain320 from '../../assets/captain320.png';
import CatQuery760 from '../../assets/catQuery760.png';
import { Button } from '../Button';
import { SubTitle } from '../SubTitle/SubTitle';

export const AboutGame = () => {
  return (
    <AboutGameStyle>
      <Container>
        <Banner>
          <ImgBanner src={GameBanner} />
          <ImgBanner720 src={GameBanner720} />
          <ImgBanner320 src={GameBanner320} />
          <BannerDescriptionBlock>
            <BannerTitle>Юнга Мур и большая стройка котов-пиратов</BannerTitle>
            <BannerDescription>
              Наше дело не так однозначно, как может показаться: семантический
              разбор внешних противодействий является качественно новой ступенью
              соответствующих условий активизации!
            </BannerDescription>
            <Button width='1020px' text='Скачать для Windows' />
          </BannerDescriptionBlock>
          <ImgRight src={RightArrow} />   
        </Banner>
        <div>
          <SubTitle text='Что тебя ждет в игре' />
          <Wrapper>
            <GrayBlockMini>
              <BlockDescription>
                Просторная карта, на которой можно весело провести время
              </BlockDescription>
              <Img src={Map} />
            </GrayBlockMini>
            <GrayBlockMini>
              <BlockDescription>
                Надежные друзья, которые помогут в решении задач
              </BlockDescription>
              <Img src={Cat} />
            </GrayBlockMini>
            <GrayBlockMini>
              <BlockDescription>
                Интересные задачи, которые предстоит решить
              </BlockDescription>
              <Img src={Science} />
            </GrayBlockMini>
            <GrayBlockMini>
              <BlockDescription>Бонусы и градострой</BlockDescription>
              <Img src={House} />
            </GrayBlockMini>
          </Wrapper>
        </div>

        <div style={{ position: 'relative' }}>
          <SubTitle text='Чему ты научишься' />
          <Learn>
            <LearnDescription>
              В игре ты потренируешься копить деньги и разумно их тратить,
              узнаешь, как правильно аргументировать выводы и затронешь азы
              строительства.
            </LearnDescription>
            <ImgBackgroundGame src={BackgroundGame} />
            <ImgBackgroundGame760 src={BackgroundGame760} />
            <ImgBackgroundGame320 src={BackgroundGame320} />
            <ImgGG src={GG} />
          </Learn>
          <ImgA className='asideButton' src={A} />
        </div>

        <div>
          <SubTitle text='Методическая информация' />
          <Description>
            Wake: Tales from the Aqualab нацелен на научные практики NGSS,
            связанные с экспериментами, моделированием и аргументацией.
            Инструменты, которые учащиеся будут использовать для изучения
            экосистем и решения задач в игре, включают:
          </Description>

          <Implements>
            <ImplementBlock>
              <ImplementsTitle>Инструменты аргументации:</ImplementsTitle>
              <WhiteBlock>
                <ImplementUl>
                  <ImplementLi>
                    Утверждение, доказательства, структура рассуждений.
                    Подкрепляйте аргументы данными, собранными в результате
                    наблюдений, экспериментов и моделирования.
                  </ImplementLi>
                  <ImplementLi>
                    Резервуар наблюдения для сбора информации о взаимодействии
                    организмов.
                  </ImplementLi>
                  <ImplementLi>
                    Утверждение, доказательства, структура рассуждений.
                    Подкрепляйте аргументы данными, собранными в результате
                    наблюдений, экспериментов и моделирования.
                  </ImplementLi>
                  <ImplementLi>
                    Резервуар наблюдения для сбора информации о взаимодействии
                    организмов.
                  </ImplementLi>
                </ImplementUl>
              </WhiteBlock>
            </ImplementBlock>
            <ImplementBlock>
              <ImplementsTitle>Инструменты аргументации:</ImplementsTitle>
              <WhiteBlock>
                <ImplementUl>
                  <ImplementLi>
                    Утверждение, доказательства, структура рассуждений.
                    Подкрепляйте аргументы данными, собранными в результате
                    наблюдений, экспериментов и моделирования.
                  </ImplementLi>
                  <ImplementLi>
                    Резервуар наблюдения для сбора информации о взаимодействии
                    организмов.
                  </ImplementLi>
                  <ImplementLi>
                    Утверждение, доказательства, структура рассуждений.
                    Подкрепляйте аргументы данными, собранными в результате
                    наблюдений, экспериментов и моделирования.
                  </ImplementLi>
                  <ImplementLi>
                    Резервуар наблюдения для сбора информации о взаимодействии
                    организмов.
                  </ImplementLi>
                </ImplementUl>
              </WhiteBlock>
            </ImplementBlock>
            <ImplementBlock>
              <ImplementsTitle>Инструменты аргументации:</ImplementsTitle>
              <WhiteBlock>
                <ImplementUl>
                  <ImplementLi>
                    Утверждение, доказательства, структура рассуждений.
                    Подкрепляйте аргументы данными, собранными в результате
                    наблюдений, экспериментов и моделирования.
                  </ImplementLi>
                  <ImplementLi>
                    Резервуар наблюдения для сбора информации о взаимодействии
                    организмов.
                  </ImplementLi>
                  <ImplementLi>
                    Утверждение, доказательства, структура рассуждений.
                    Подкрепляйте аргументы данными, собранными в результате
                    наблюдений, экспериментов и моделирования.
                  </ImplementLi>
                  <ImplementLi>
                    Резервуар наблюдения для сбора информации о взаимодействии
                    организмов.
                  </ImplementLi>
                </ImplementUl>
              </WhiteBlock>
            </ImplementBlock>
            <ImgS className='asideButton' src={S} />
            <ImgLeft src={LeftArrow} />   
          </Implements>
        </div>
        <div>
          <SubTitle text='Об игре' />
          <GrayBlock>
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
          </GrayBlock>
        </div>

        <Query>
          <Interview>
            <InterviewTitle>Понравилась ли тебе игра?</InterviewTitle>
            <InterviewBtns>
              <InterviewBtn>Да</InterviewBtn>
              <InterviewBtn>Нет</InterviewBtn>
            </InterviewBtns>
          </Interview>
          <Image>
            <ImgCaptain src={Captain} />
            <ImgCatQuery src={CatQuery} />
            <ImgCaptain760 src={Captain760} />
            <ImgCatQuery760 src={CatQuery760} />
            <ImgCaptain320 src={Captain320} />
          </Image>
        </Query>

        <div className='relative '>
          <Title>Стань частью нашей команды</Title>
          <Form
            submitText='Подписаться'
            text='Хочешь получать актуальные новости о наших играх? Тогда смело подписывайся на рассылку!'
          />
        </div>
      </Container>
    </AboutGameStyle>
  );
};

const ImgRight = styled.img({
  position: 'absolute',
  left: '-172px',
  bottom: '-295px',

  '@media(max-width: 1580px)': {
    display: 'none',
  },
})

const ImgLeft = styled.img({
  position: 'absolute',
  right: '-172px',
  bottom: '-295px',

  '@media(max-width: 1580px)': {
    display: 'none',
  },
})

const AboutGameStyle = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  gap: '25px',
});

const Container = styled.div({
  width: '100%',
  maxWidth: '1224px',
  display: 'flex',
  flexDirection: 'column',
  gap: '25px',
});

const Implements = styled.div({
  position: 'relative',
  padding: '48px 60px',
  background: '#F7F7F8',
  borderRadius: '20px',

  '@media(max-width: 700px)': {
    padding: '12px 8px 24px 8px',
  },
});

const ImplementBlock = styled.div({
  ':not(:last-child)': {
    marginBottom: '48px',
  },

  '@media(max-width: 700px)': {
    ':not(:last-child)': {
      marginBottom: '24px',
    },
  },
});

const ImplementUl = styled.ul({
  gap: '24px',
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  margin: '0',
});

const ImplementLi = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 30px;
  &::before {
    content: '';
    background: #ffa000;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 16px;
    position: absolute;
    left: -40px;
  }
  @media (max-width: 700px) {
    align-items: flex-start;
  }
`;

const ImplementsTitle = styled.div({
  color: '#0B0D22',
  marginBottom: '24px',
  fontSize: '30px',
  fontWeight: '600',

  '@media(max-width: 700px)': {
    marginBottom: '12px',
  },
});

const WhiteBlock = styled.div({
  background: '#FFFFFF',
  width: '100%',
  maxWidth: '1104px',
  padding: '42px',
  borderRadius: '16px',

  '@media(max-width: 700px)': {
    padding: '8px',
  },
});

const Img = styled.img({});

const ImgBanner = styled.img({
  width: '100%',

  '@media(max-width: 920px)': {
    display: 'none',
  },
});

const ImgBanner720 = styled.img({
  width: '100%',
  display: 'none',
  borderRadius: '20px',

  '@media(max-width: 920px)': {
    display: 'block',
  },

  '@media(max-width: 520px)': {
    display: 'none',
  },
});

const ImgBanner320 = styled.img({
  width: '100%',
  display: 'none',
  borderRadius: '20px',

  '@media(max-width: 520px)': {
    display: 'block',
  },
});

const ImgBackgroundGame = styled.img({
  '@media(max-width: 1041px)': {
    display: 'none',
  },
});

const ImgBackgroundGame760 = styled.img({
  display: 'none',

  '@media(max-width: 1041px)': {
    display: 'block',
  },

  '@media(max-width: 694px)': {
    display: 'none',
  },
});

const ImgBackgroundGame320 = styled.img({
  display: 'none',
  width: '100%',

  '@media(max-width: 694px)': {
    display: 'block',
  },
});

const ImgCaptain = styled.img({
  '@media(max-width: 1041px)': {
    display: 'none',
  },
});

const ImgCatQuery = styled.img({
  '@media(max-width: 1041px)': {
    display: 'none',
  },
});

const ImgCaptain760 = styled.img({
  display: 'none',

  '@media(max-width: 1041px)': {
    display: 'block',
  },

  '@media(max-width: 685px)': {
    display: 'none',
  },

  // "@media(max-width: 694px)": {
  //   display: "none",
  // },
});

const ImgCatQuery760 = styled.img({
  display: 'none',

  '@media(max-width: 1041px)': {
    display: 'block',
  },

  '@media(max-width: 685px)': {
    display: 'none',
  },
});

const ImgCaptain320 = styled.img({
  display: 'none',

  '@media(max-width: 685px)': {
    display: 'block',
  },
});

const Image = styled.div({
  display: 'flex',
  justifyContent: 'space-between',

  '@media(max-width: 685px)': {
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '100%',
  },
});

const ImgGG = styled.img({
  position: 'absolute',
  right: '36px',
  bottom: '0',

  '@media(max-width: 694px)': {
    right: 'auto',
  },
});

const ImgS = styled.img({
  position: 'absolute',
  right: '-46px',
  top: '-51px',
  transform: 'rotate(322deg)',

  '@media(max-width: 1340px)': {
    top: '-20px',
    right: '-20px',
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
  maxWidth: '594px',
  padding: '24px 24px',
  backgroundColor: '#F7F7F8',
  borderRadius: '20px',
  boxShadow: '16px 16px 0px #FFCD4C',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '270px',

  '@media(max-width: 1301px)': {
    height: '408px',
    width: '340px',
    flexDirection: 'column',
  },
});

const Wrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '24px',
});

const Title = styled.div({
  fontSize: '40px',
  fontWeight: '600',
  color: '#0B0D22',
  marginBottom: '24px',

  '@media(max-width: 700px)': {
    marginBottom: '12px',
  },
});

const Description = styled.div({
  color: '#0B0D22',
  fontSize: '30px',
  marginBottom: '24px',

  '@media(max-width: 700px)': {
    marginBottom: '12px',
    fontSize: '24px',
  },
});

const BlockDescription = styled.div({
  color: '#0B0D22',
  fontSize: '30px',

  '@media(max-width: 768px)': {
    fontSize: '24px',
  },
});

const Learn = styled.div({
  background: '#F7F7F8',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '20px',
  position: 'relative',

  '@media(max-width: 694px)': {
    flexDirection: 'column',
  },
});

const LearnDescription = styled.div({
  fontSize: '30px',
  color: '#0B0D22',
  margin: '48px',

  '@media(max-width: 1300px)': {
    marginLeft: '24px',
    marginRight: '0',
  },

  '@media(max-width: 440px)': {
    marginBottom: '130px',
  },

  '@media(max-width: 380px)': {
    marginBottom: '196px',
  },
});

const Query = styled.div({
  background: '#FFCA28',
  width: '100%',
  height: '218px',
  borderRadius: '20px',
  overflow: 'hidden',
  position: 'relative',

  '@media(max-width: 685px)': {
    height: '474px',
  },
});

const Interview = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginLeft: '-300px',
  marginTop: '-64px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '600px',

  '@media(max-width: 685px)': {
    top: '0',
    marginTop: '24px',
  },
});

const InterviewTitle = styled.div({
  fontSize: '40px',
  fontWeight: '600',
  marginBottom: '32px',
  textAlign: 'center',

  '@media(max-width: 685px)': {
    width: '300px',
  },
});

const InterviewBtns = styled.div({
  display: 'flex',
  width: '100%',
  gap: '24px',

  '@media(max-width: 685px)': {
    gap: '12px',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const InterviewBtn = styled.button({
  background: '#FFF3E8',
  border: 'none',
  height: '50px',
  maxWidth: '288px',
  width: '100%',
  borderRadius: '24px',
  padding: '16px 30px',
  color: '#FFA000',
  fontSize: '18px',
  fontWeight: '600',
});

const Banner = styled.div({
  position: 'relative',
});

const BannerDescriptionBlock = styled.div({
  background: 'rgba(247, 247, 248, 0.66)',
  backdropFilter: 'blur(12px)',
  borderRadius: '20px',
  height: '268px',
  position: 'absolute',
  width: '100%',
  bottom: '0',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '48px 24px',

  '@media(max-width: 520px)': {
    height: '408px',
    // paddingBottom: "0",
    // paddingTop: "0",
  },
});

const BannerTitle = styled.div({
  fontSize: '30px',
  fontWeight: '600',
  marginBottom: '12px',
});

const BannerDescription = styled.div({
  fontSize: '18px',
  marginBottom: '32px',
  maxWidth: '1020px',
  textAlign: 'center',
});
