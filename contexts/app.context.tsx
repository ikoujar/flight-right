import * as React from 'react';
import { Citizen } from '../interfaces';

interface AppContextInterface {
  citizen?: Citizen;
  setCitizen: (data?: Citizen) => void;
}

const defaults: AppContextInterface = {
    setCitizen: (data?: Citizen) => {}
};

export const AppContext = React.createContext(defaults);

export const AppContextProvider = (props: any) => {

  const [citizen, setCitizen] = React.useState<Citizen>();

  const value = {
    citizen,
    setCitizen
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
