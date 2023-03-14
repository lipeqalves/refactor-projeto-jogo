import { createContext, ReactNode, useState} from "react";
import { personageStege } from "../services/util/personagem-stege";

interface IGlobalContext {
  resposta: string
  setResposta:(newState: string) => void
  handlerResults: (res: string) => void
  isDisabled: boolean
  setIsDisabled:(newState: boolean) => void
  msg: string
  setMsg:(msg: string) => void
  cont:number
  setCont: (cont: number) => void
  pontuacao: number
  setPontuacao: (pontuacao: number) => void
  stege:number
  setStege: (stage: number) => void
  personagem: string
  setPersonagem: (personagem: string) => void
}
interface UserContextProps{
  children:ReactNode,
}

const initialValue ={
  resposta: "",
  setResposta: () => {},
  handlerResults: () => {},
  isDisabled: true,
  setIsDisabled: () => {},
  msg: "",
  setMsg: () => {},
  cont:1,
  setCont: () =>{},
  pontuacao: 0,
  setPontuacao: () => {},
  stege:0,
  setStege: () => {},
  personagem: "",
  setPersonagem: () => {},
}
export const GlobalContext = createContext<IGlobalContext>(initialValue);

export const UserGlobalContext = ({children}: UserContextProps) =>{
  const [resposta, setResposta] = useState(initialValue.resposta)
  const [isDisabled, setIsDisabled] = useState(initialValue.isDisabled)
  const [msg, setMsg] = useState(initialValue.msg)
  const [cont, setCont] = useState(initialValue.cont)
  const [pontuacao, setPontuacao] = useState(initialValue.pontuacao)
  const [stege, setStege] = useState(initialValue.stege)
  const [personagem, setPersonagem] = useState(initialValue.personagem)

  const handlerResults = (res: string) => {
    setResposta(res)
    switch (res) {
      case personageStege(stege,personagem):
        setIsDisabled(false);
        setMsg("Parabéns!!! Você esta sabendo da Historia.")
        if(cont === 1){
          setPontuacao(pontuacao + 10);
        }else if(cont === 2 ){
          setPontuacao(pontuacao + 5);
        }else{
          setPontuacao(pontuacao + 2);
        }
        setCont(initialValue.cont)
        break;
      default:
        setIsDisabled(true);
        if(cont < 3){
        setMsg(`Opção Errada!!! Você tem ${cont<2?cont+1:"ultima"} chances`)
        setCont(cont+1)
        }else{
          setMsg("Você não tem mais chances, Click em voltar para iniciar o teste.")
          setCont(cont+1)
        }
      }
  }
  return(
    <GlobalContext.Provider value={{
      personagem,
      setPersonagem,
      pontuacao,
      setPontuacao,
      cont,
      setCont,
      msg,
      setMsg,
      resposta,
      setResposta,
      handlerResults,
      setIsDisabled,
      isDisabled,
      stege,
      setStege,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}

