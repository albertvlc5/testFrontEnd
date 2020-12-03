import { View } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

interface CheckProps {
  theme: DefaultTheme;
  checked: boolean;
}

export const Box = styled(View)`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.neutral9};
    border-radius: 5px;
    width: 30px;
    height: 30px;
    padding: 3px;
  `}
`;

export const Check = styled(View)`
  ${({ theme, checked }: CheckProps) => css`
    background-color: ${checked ? theme.colors.primary3 : 'transparent'};
    height: 100%;
    width: 100%;
    border-radius: 5px;
  `}
`;
