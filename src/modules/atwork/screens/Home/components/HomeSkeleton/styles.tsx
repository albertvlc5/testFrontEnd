import styled from 'styled-components/native';

export const LinkContainer = styled.View`
  ${({ theme }) => `
	padding: ${theme.space.spacing16px}px;
	border: 1px solid;
	borderColor: ${theme.colors.neutral4};
	borderBottomColor: transparent;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	margin-top: -11px;
	z-index: 10;
	background-color: ${theme.colors.neutral1};
	borderBottomStartRadius: ${theme.radii.small}px;
	borderBottomEndRadius: ${theme.radii.small}px;
	borderBottomColor: ${theme.colors.neutral4};
  `}
`;
