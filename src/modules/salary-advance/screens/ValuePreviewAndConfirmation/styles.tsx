import { Text, View } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

export const Wrapper = styled.View`
  margin: 110px 21px;
`;

interface CustomTypoProps {
  theme: DefaultTheme;
  primaryColor?: boolean;
  size?: string;
}

export const CustomTypograhpy = styled(Text)`
  ${({ theme, primaryColor, size }: CustomTypoProps) => css`
    font-size: ${size ? size : `26px`};
    line-height: 36px;
    color: ${primaryColor ? theme.colors.primary3 : theme.colors.neutral9}
    font-family: ${theme.fonts.mockTokenHelveticaDisplayLight};
  `}
`;

export const BottomBox = styled(View)`
  flex: 1;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const StickToBottom = styled(View)`
  position: absolute;
  bottom: 100px;
  height: 90px;
`;
