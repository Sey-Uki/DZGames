import styled from 'styled-components';
import bgImage from '../../../assets/slider-bg.png';
import sliderOpacity from '../../../assets/slider-opacity.png';
import { Carousel } from 'react-responsive-carousel';
import { Button } from '../../Button';

const INTERVAL = 6000;

export const CarouselSection = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      interval={INTERVAL}
      // autoPlay
      infiniteLoop
      emulateTouch
      renderIndicator={(
        clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
        isSelected: boolean
      ) => {
        return (
          <CustomIndicator isSelected={isSelected} onClick={clickHandler}>
            <div />
          </CustomIndicator>
        );
      }}
    >
      <SliderItem>
        <Left>
          <img src={bgImage} alt='slider' />
        </Left>
        <Inner>
          <Wrapper>
            <h2>Юнга Мур и большая стройка котов-пиратов</h2>
            <p>
              Наше дело не так однозначно, как может показаться: семантический
              разбор внешних противодействий является качественно новой ступенью
              соответствующих условий активизации!
            </p>
          </Wrapper>
          <Button width='100%' text='Скачать для Windows' />
        </Inner>
      </SliderItem>
      <SliderItem>
        <Left>
          <img src={bgImage} alt='slider' />
        </Left>
        <Inner>
          <Wrapper>
            <h2>Юнга Мур и большая стройка котов-пиратов</h2>
            <p>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. В то время некий безымянный
              печатник создал большую коллекцию размеров и форм шрифтов,
              используя Lorem Ipsum для распечатки образцов{' '}
            </p>
          </Wrapper>
          <Button width='100%' text='Скачать для Windows' />
        </Inner>
      </SliderItem>
      <SliderItem>
        <Left>
          <img src={bgImage} alt='slider' />
        </Left>
        <Inner>
          <Wrapper>
            <h2>Юнга Мур и большая стройка котов-пиратов</h2>
            <p>
              Есть много вариантов Lorem Ipsum, но большинство из них имеет не
              всегда приемлемые модификации, например, юмористические вставки
              или слова, которые даже отдалённо не напоминают латынь.
            </p>
          </Wrapper>
          <Button width='100%' text='Скачать для Windows' />
        </Inner>
      </SliderItem>
    </Carousel>
  );
};

const SliderItem = styled.div`
  display: flex;
  height: 100%;
`;

const Left = styled.div`
  display: flex;
  height: 100%;
`;

const CustomIndicator = styled.button<{
  isSelected: boolean;
}>`
  width: 140px;
  height: 4px;
  border-radius: 5px;
  margin-left: 5px;

  border: 0;
  padding: 0;
  overflow: hidden;

  & div {
    background-color: #ff7001;
    width: 0;
    height: 4px;
    border-radius: 5px;
    animation: ${({ isSelected }) =>
      isSelected && `changeWidth ${INTERVAL / 1000}s linear`};

    @keyframes changeWidth {
      0% {
        width: 0;
      }

      100% {
        width: 100%;
      }
    }
  }
`;

const Inner = styled.div`
  height: 100%;
  width: 520px;
  padding: 80px 30px 30px 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-image: url('${sliderOpacity}');
  background-repeat: no-repeat;
`;

const Wrapper = styled.div`
  & h2 {
    font-weight: 600;
    font-size: 30px;
    line-height: 100%;
    text-align: left;
    margin-top: 0;
  }

  & p {
    font-weight: 400;
    font-size: 18px;
    line-height: 132%;
    text-align: left;
  }
`;
