import { createContext, useState, useContext, ReactNode } from 'react';
import { SleeperUserContextType } from '../models/context/SleeperUserContextType';

const SleeperUserContext = createContext<SleeperUserContextType | undefined>(
  undefined
);

export const SleeperUserProvider = ({ children }: { children: ReactNode }) => {
  const [sleeperUserId, setSleeperUserId] = useState<string | null>(null);

  return (
    <SleeperUserContext.Provider value={{ sleeperUserId, setSleeperUserId }}>
      {children}
    </SleeperUserContext.Provider>
  );
};

export const useSleeperUser = (): SleeperUserContextType => {
  const context = useContext(SleeperUserContext);
  if (!context) {
    throw new Error('useSleeperUser must be used within a SleeperUserProvider');
  }
  return context;
};
