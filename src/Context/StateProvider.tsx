import { useState, useContext, createContext, ReactNode } from "react";

interface StateContextType {

}

const StateContext = createContext<StateContextType | undefined>(undefined);

interface StateProviderProps {
  children: ReactNode;
}

function StateProvider({ children }: StateProviderProps) {
  return (
    <StateContext.Provider value={{ /* initial state values */ }}>
      {children}
    </StateContext.Provider>
  );
}

export function FormState(): StateContextType | undefined {
  return useContext(StateContext);
}

export default StateProvider;
