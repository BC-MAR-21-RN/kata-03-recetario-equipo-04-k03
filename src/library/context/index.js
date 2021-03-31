import React from 'react';
import ContextProvider from './providers';
export const WithContext = PageComponent => {
  const withContext = props => {
    return (
      <ContextProvider>
        <PageComponent {...props} />
      </ContextProvider>
    );
  };
  return withContext;
};

export default WithContext;
