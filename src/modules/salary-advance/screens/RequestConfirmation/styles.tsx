import { View } from 'react-native';
import styled, { css } from 'styled-components/native';

export const BottomBox = styled(View)`
  flex: 1;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const StickToBottom = styled(View)`
  position: absolute;
  bottom: 40px;
  height: 90px;
`;

export const CheckIconBox = styled(View)`
  ${({ theme }) => css`
    height: 54px;
    width: 54px;
    border: 2px solid ${theme.colors.primary3};
    justify-content: center;
    align-items: center;
    border-radius: 40px;
  `}
`;
