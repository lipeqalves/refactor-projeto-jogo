import { createContext, ReactNode, useState} from "react";

interface IGlobalContext {
  resposta: string
  setResposta:(newState: string) => void
  handler: (res: string) => void
  isDisabled: boolean
  setIsDisabled:(newState: boolean) => void
}
interface UserContextProps{
  children:ReactNode,
}

const initialValue ={
  resposta: "teste",
  setResposta: () => {},
  handler: () => {},
  isDisabled: true,
  setIsDisabled: () => {}
}
export const GlobalContext = createContext<IGlobalContext>(initialValue);

export const UserGlobalContext = ({children}: UserContextProps) =>{
  const [resposta, setResposta] = useState(initialValue.resposta)
  const [isDisabled, setIsDisabled] = useState(initialValue.isDisabled)


  const handler = (res: string) => {
    setResposta(res)
    switch (res) {
      case 'a':
        console.log('resposta: ',res);
        setIsDisabled(false);
        break;
      default:
        setIsDisabled(true);
        console.log(`Sorry, we are out of ${res}.`);
    }

  }

  return(
    <GlobalContext.Provider value={{resposta,setResposta, handler, setIsDisabled, isDisabled }}>
      {children}
    </GlobalContext.Provider>
  )
}

