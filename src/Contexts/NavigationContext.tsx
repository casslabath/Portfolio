import React, { useState } from 'react';

interface INavigationContext {
  currentPath: string,
  setCurrentPath?: any;
}

const defaultState = {
  currentPath: '',
};

export const NavigationContext = React.createContext<INavigationContext>(defaultState);

export const NavigationProvider: React.FC = ({children}: any) => {
  const [currentPath, setCurrentPath] = useState('/');

  return (
    <NavigationContext.Provider
      value = {{
        currentPath,
        setCurrentPath
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
