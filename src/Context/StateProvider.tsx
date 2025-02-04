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
  content:string,
  setContent:(contetn:string) =>void 


}

const StateContext = createContext<StateContextType | undefined>(undefined);

const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
   const [count, setCount] = useState<number>(() => {
    const storedCount = localStorage.getItem("count");
    return storedCount ? JSON.parse(storedCount) : 0; 
  });

   const [content, setContent] = useState("");

   const [formData, setFormData] = useState<FormData>({
      name: "",
      address: "",
      email: "",
      phone: "",
    });
  

  

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  useEffect(()=>{
     let userData = localStorage.getItem('userData') ;
     if(userData != null){
        setContent(userData)
     }
  })

  return (
    <StateContext.Provider value={{ count,setCount,formData, setFormData,content,setContent }}>
      {children}
    </StateContext.Provider>
  );
};

export function FormState(): StateContextType | undefined {
  return useContext(StateContext);
}

export default StateProvider;
