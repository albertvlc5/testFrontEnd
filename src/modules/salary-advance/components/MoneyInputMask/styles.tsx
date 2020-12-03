import { TextInputMask } from 'react-native-masked-text';
import styled, { css } from 'styled-components/native';

export const InputBox = styled.View`
  flex-direction: row;
`;

export const InputMask = styled(TextInputMask)`
  ${({ theme }) => css`
    font-family: ${theme.fonts.mockTokenHelveticaDisplayLight}
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.6px;
    background-color: transparent;
    border-bottom-color: transparent;
    width: 100%;
  `};
`;
