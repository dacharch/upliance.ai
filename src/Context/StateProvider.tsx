import { useState, useContext, createContext, ReactNode,useEffect } from "react";

interface StateProviderProps {
  children: ReactNode;
}

interface FormData {
  name: string;
  address: string;
  email: string;
  phone: string;
}

interface StateContextType {
  count: number;
  setCount: (count: number) => void;
  formData: FormData;
  setFormData: (data: FormData) => void;
  unsavedChanges: boolean;
  setUnsavedChanges: (status: boolean) => void;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const [count, setCount] = useState<number>(() => {
    const storedCount = localStorage.getItem("count");
    return storedCount ? JSON.parse(storedCount) : 0; 
  });

   const [formData, setFormData] = useState<FormData>({
      name: "",
      address: "",
      email: "",
      phone: "",
    });
    
    const [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);


  return (
    <StateContext.Provider value={{ count,setCount,formData, unsavedChanges, setFormData, setUnsavedChanges }}>
      {children}
    </StateContext.Provider>
  );
};

export function FormState(): StateContextType | undefined {
  return useContext(StateContext);
}

export default StateProvider;
