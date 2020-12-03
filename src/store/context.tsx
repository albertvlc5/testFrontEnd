import React from 'react';

interface TNavigationParams {
  payrollId?: string;
}

interface TStore {
  params: TNavigationParams;
}

export const Context = React.createContext<TStore>({ params: {} });
