import { ThemeContainer } from 'mobile-styles';
import React from 'react';

import { render } from '@testing-library/react-native';
import { Context } from '../../store/context';

export const storeMock = { params: { payrollId: '123456' } };

export const mountWithAtworkHost = (tree: React.ReactElement) => {
  const WrappingThemeProvider: React.FC<{
    children: React.ReactChild;
  }> = (props) => (
    <ThemeContainer>
      <Context.Provider value={storeMock}>{props.children}</Context.Provider>
    </ThemeContainer>
  );

  return render(tree, { wrapper: WrappingThemeProvider });
};
