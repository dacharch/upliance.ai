import { useState, useContext, createContext, ReactNode,useEffect } from "react";

interface StateProviderProps {
  children: ReactNode;
}

interface StateContextType {
  count: number;
  setCount: (count: number) => void;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const [count, setCount] = useState<number>(() => {
    const storedCount = localStorage.getItem("count");
    return storedCount ? JSON.parse(storedCount) : 0; // Default to 0 if nothing is stored
  });

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);


  return (
    <StateContext.Provider value={{ count, setCount }}>
      {children}
    </StateContext.Provider>
  );
};

export function FormState(): StateContextType | undefined {
  return useContext(StateContext);
}

export default StateProvider;
