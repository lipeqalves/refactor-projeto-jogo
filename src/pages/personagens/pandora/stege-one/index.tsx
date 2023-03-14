
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Button } from "../../../../components/button";
import { CardPersonagem } from "../../../../components/card_personagem";
import { Footer } from "../../../../components/footer";
import { Header } from "../../../../components/header";
import { Input } from "../../../../components/input";
import { GlobalContext } from "../../../../context/context";
import { Container, Conteudo,ContainerPincipal, DivImg, Msg, Li } from "../../styles/styles.stege";

export const StageOnePandora = () => {
const navigate = useNavigate()
const { isDisabled, setIsDisabled,msg, cont, setCont, resposta,setResposta, setMsg, setStege} = useContext(GlobalContext)
  const paginaIniciar = () =>{
    setCont(1);
    setResposta("")
    setMsg("")
    navigate("/inicio")
  }
const nextStage = () => {
  setStege(2)
  setCont(1);
  setResposta("")
  setMsg("")
  setIsDisabled(!isDisabled)
  navigate("/pandora/stegetwo")

}

  return (

    <ContainerPincipal>
    <Header onClick={paginaIniciar} title="PANDORA" tituloBtn={"Voltar"} isDisabled={!isDisabled} />
    <Container>
      <DivImg >
      <CardPersonagem  nomePersonagem={"Pandora"} urlImg="https://mitologia.hi7.co/mitologia/mitologia-57ac36985a5fa.jpg" variant={""}/>
      </DivImg>

      <Conteudo>
        <h1>Stege One</h1>
        <p>
        foi a primeira mulher mortal a ser criada e Zeus
        tinha um propósito muito particular e secreto com a sua existência. Qual o proposito?
        </p>
        <ul>
          <Li>a) Casar com Zeus</Li>
          <Li>b) Lutar na Guerra</Li>
          <Li>c) Casar com Prometeus</Li>
          <Li error={isDisabled}>d) Vingar-se de Prometeus e Epimteus</Li>
          <Li>e) Nenhuma das alternativas anteriores</Li>
        </ul>
        {cont <= 3 && resposta !== "d" ? <><Input  /> <Msg error={isDisabled}>{msg}</Msg> </>:<Msg error={isDisabled} >{msg}</Msg> }
        <Button name={"Proximo"} onClick={nextStage} isDisabled={isDisabled}  />
      </Conteudo>
    </Container>
    <Footer text="Filipe Alves 2023"/>
    </ContainerPincipal>
  );
};
