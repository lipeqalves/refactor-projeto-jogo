
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Button } from "../../../../components/button";
import { CardPersonagem } from "../../../../components/card_personagem";
import { Footer } from "../../../../components/footer";
import { Header } from "../../../../components/header";
import { Input } from "../../../../components/input";
import { GlobalContext } from "../../../../context/context";
import { Container, Conteudo,ContainerPincipal, DivImg, Msg, Li } from "../../styles/styles.stege";

export const StageThreeEpimeteu = () => {
const navigate = useNavigate()
const {
    isDisabled,
    msg,
    cont,
    setCont,
    setIsDisabled,
    resposta,setResposta,
    setMsg,
    setStege} = useContext(GlobalContext)
  const paginaInicial = () =>{
    setStege(0)
    setCont(1);
    setResposta("")
    setMsg("")
    navigate("/inicio")
  }

  const nextStage = () => {
    setStege(0)
    setCont(1);
    setResposta("")
    setMsg("")
    setIsDisabled(!isDisabled)
    navigate("/epimeteu/final")
  }
  return (
    <ContainerPincipal>
    <Header onClick={paginaInicial} title="EPIMETEU" tituloBtn={"Voltar"} isDisabled={!isDisabled} />
    <Container>
      <DivImg >
      <CardPersonagem  nomePersonagem={"Epimeteu"} urlImg="http://3.bp.blogspot.com/-1hckDuYE1TM/Uemw7BukfYI/AAAAAAAAAMA/byB5BSgSUdU/s1600/EPIMETEU+(%E1%BC%98%CF%80%CE%B9%CE%BC%CE%B7%CE%B8%CE%B5%CF%8D%CF%82).+Por+Genzoman..jpg" variant={""}/>
      </DivImg>
      <Conteudo>
        <h1>Stege Three</h1>
        <p>
        Quais ou Qual foi a criação que Epimeteu e seu irmão Prometeu foram encarregados?
        </p>
        <ul>
          <Li>a) Os Mares</Li>
          <Li>b) A Terra</Li>
          <Li>c) O Ceu</Li>
          <Li>d) A primeira mulher, Pandora</Li>
          <Li error={isDisabled}>e) Os mortais, tanto animais como seres humanos</Li>
        </ul>
        {cont <= 3 && resposta !== "e" ? <><Input  /> <Msg error={isDisabled}>{msg}</Msg> </>:<Msg error={isDisabled} >{msg}</Msg> }
        <Button name={"Resultado"} onClick={nextStage } isDisabled={isDisabled}  />
      </Conteudo>
    </Container>
    <Footer text="Filipe Alves 2023"/>
    </ContainerPincipal>
  );
};
