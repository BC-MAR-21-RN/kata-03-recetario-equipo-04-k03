import React from 'react';
import ModalProvider from './ModalProvider';
const ContextProvider = ({children}) => {
  return <ModalProvider>{children}</ModalProvider>;
};

export default ContextProvider;
