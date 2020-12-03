import styled, { css } from 'styled-components/native';
import { Typography } from 'mobile-styles';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    justify-content: center;
    align-items: center;
    flex: 1;
    align-self: stretch;
    padding: 0 20px;
    background-color: ${theme.colors.neutral1};
  `}
`;

export const Title = styled(Typography)`
  margin-bottom: 8px;
  margin-top: 16px;
`;

export const Description = styled(Typography)`
  margin-bottom: 16px;
  padding: 0 12px;
`;

export const Button = styled.TouchableOpacity`
  align-self: stretch;
  height: 54px;
  align-items: center;
  justify-content: center;
  padding: 17px 20px;
`;
