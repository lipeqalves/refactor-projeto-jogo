
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Button } from "../../../../components/button";
import { CardPersonagem } from "../../../../components/card_personagem";
import { Footer } from "../../../../components/footer";
import { Header } from "../../../../components/header";
import { Input } from "../../../../components/input";
import { GlobalContext } from "../../../../context/context";
import { Container, Conteudo,ContainerPincipal, DivImg, Msg, Li } from "../../styles/styles.stege";

export const StageTwoEpimeteu = () => {
const navigate = useNavigate()
const { isDisabled,setIsDisabled, msg, cont, setCont, resposta,setResposta, setMsg, setStege} = useContext(GlobalContext)
  const mudarPagina = () =>{
    setCont(1);
    setResposta("")
    setMsg("")
    navigate("/inicio")
  }
  const nextStage = () => {
    setStege(3)
    setCont(1);
    setResposta("")
    setMsg("")
    setIsDisabled(!isDisabled)
    navigate("/epimeteu/stegethree")
  }

  return (

    <ContainerPincipal>
    <Header onClick={mudarPagina} title="EPIMETEU" tituloBtn={"Voltar"} isDisabled={!isDisabled} />
    <Container>
      <DivImg >
      <CardPersonagem  nomePersonagem={"Epimeteu"} urlImg="http://3.bp.blogspot.com/-1hckDuYE1TM/Uemw7BukfYI/AAAAAAAAAMA/byB5BSgSUdU/s1600/EPIMETEU+(%E1%BC%98%CF%80%CE%B9%CE%BC%CE%B7%CE%B8%CE%B5%CF%8D%CF%82).+Por+Genzoman..jpg" variant={""}/>
      </DivImg>

      <Conteudo>
        <h1>Stege Two</h1>
        <p>
        Epimeteu fez os animais e lhes concedeu dons variados como força,
         coragem, velocidade, presas, garras, asas e agilidade. Quando chegou a vez
          dos seres humanos,não
         havia mais habilidades para serem destinadas. Qual foi o don concedido aos
         seres humanos?
        </p>
        <ul>
          <Li>a) A agua sagrada</Li>
          <Li error={isDisabled}>b) O fogo sagrada, roubado dos Deuses</Li>
          <Li>c) O don de falar com animais</Li>
          <Li>d) A imortalidade</Li>
          <Li>e) Nenhuma das anteriores</Li>
        </ul>
        {cont <= 3 && resposta !== "b" ? <><Input  /> <Msg error={isDisabled}>{msg}</Msg> </>:<Msg error={isDisabled} >{msg} </Msg> }
        <Button name={"Proximo"} onClick={nextStage} isDisabled={isDisabled}  />
      </Conteudo>
    </Container>
    <Footer text="Filipe Alves 2023"/>
    </ContainerPincipal>
  );
};
