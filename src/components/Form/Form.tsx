import styled from 'styled-components';
import { Button } from '../Button/Button';

import BlockLeftImg from '../../assets/blockLeft.png';
import BlockLeftImg720 from '../../assets/blockLeft720.png';

export const Form = ({
  text,
  withMessage = true,
  submitText
}: {
  text: string;
  withMessage?: boolean;
  submitText?: string;
}) => {
  return (
    <FormBlock>
      <BlockLeft>
        <Img src={BlockLeftImg} alt='' />
        <Img720 src={BlockLeftImg720} alt='' />
        <Text>{text}</Text>
      </BlockLeft>
      <FormStyle>
        <Input type='text' placeholder='Имя' />
        <Input type='text' placeholder='Почта' />
        {withMessage && <Textarea placeholder='Сообщение ' />}
        <Button withMargin width='516px' text={submitText ?? 'Отправить'} />
      </FormStyle>
    </FormBlock>
  );
};

const FormStyle = styled.div({
  width: '50%',
  backgroundColor: '#F7F7F8',
  borderRadius: '20px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  padding: '48px 20px',

  '@media(max-width: 1220px)': {
    width: '100%',
  },

  '@media(max-width: 600px)': {
    padding: '48px 25px',
  },
});

const Img = styled.img({
  '@media(max-width: 1220px)': {
    display: 'none',
  },
});

const Img720 = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'none',
  borderRadius: 20,

  '@media(max-width: 1220px)': {
    display: 'block',
  },
});

const Input = styled.input({
  maxWidth: '516px',
  height: '50px',
  color: '#BDA5FF',
  fontSize: '18px',
  fontWeight: '600',
  paddingLeft: '30px',
  width: '100%',
  border: '1px solid #BDA5FF',
  borderRadius: '20px',
});

const Textarea = styled.textarea({
  maxWidth: '516px',
  maxHeight: '94px',
  height: '100%',
  color: '#BDA5FF',
  fontSize: '18px',
  fontWeight: '600',
  paddingLeft: '30px',
  paddingTop: '16px',
  resize: 'none',
  width: '100%',
  border: '1px solid #BDA5FF',
  borderRadius: '20px',
  marginBottom: '12px',
});

const FormBlock = styled.div({
  height: '388px',
  display: 'flex',

  '@media(max-width: 1220px)': {
    height: '100%',
  },

  '@media(max-width: 991px)': {
    flexDirection: 'column',
  },

  '@media(max-width: 600px)': {
    margin: '0',
  },
});

const BlockLeft = styled.div({
  width: '50%',
  position: 'relative',

  '@media(max-width: 1220px)': {
    width: '100%',
  },

  '@media(max-width: 600px)': {
    display: 'none',
  },
});

const Text = styled.div({
  color: '#ffffff',
  position: 'absolute',
  top: '48px',
  fontSize: '40px',
  fontWeight: '600',
  marginLeft: '48px',
  marginRight: '48px',

  '@media(max-width: 1220px)': {
    marginLeft: '24px',
    marginRight: '24px',
  },
});
