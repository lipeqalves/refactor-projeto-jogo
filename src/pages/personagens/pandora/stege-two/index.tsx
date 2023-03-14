
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Button } from "../../../../components/button";
import { CardPersonagem } from "../../../../components/card_personagem";
import { Footer } from "../../../../components/footer";
import { Header } from "../../../../components/header";
import { Input } from "../../../../components/input";
import { GlobalContext } from "../../../../context/context";
import { Container, Conteudo,ContainerPincipal, DivImg, Msg, Li } from "../../styles/styles.stege";

export const StageTwoPandora = () => {
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
    navigate("/pandora/stegethree")
  }

  return (

    <ContainerPincipal>
    <Header onClick={mudarPagina} title="PANDORA" tituloBtn={"Voltar"} isDisabled={!isDisabled} />
    <Container>
      <DivImg >
      <CardPersonagem  nomePersonagem={"Pandora"} urlImg="https://mitologia.hi7.co/mitologia/mitologia-57ac36985a5fa.jpg" variant={""}/>
      </DivImg>

      <Conteudo>
        <h1>Stege Two</h1>
        <p>
        Da união entre Epimeteu e Pandora nasce uma criaça. Qual o nome?
        </p>
        <ul>
          <Li>a) Deucalião</Li>
          <Li>b) Prometeu</Li>
          <Li>c) Afrodite</Li>
          <Li>d) Gaia</Li>
          <Li error={isDisabled}>e) Pirra</Li>
        </ul>
        {cont <= 3 && resposta !== "e" ? <><Input  /> <Msg error={isDisabled}>{msg}</Msg> </>:<Msg error={isDisabled} >{msg} </Msg> }
        <Button name={"Proximo"} onClick={nextStage} isDisabled={isDisabled}  />
      </Conteudo>
    </Container>
    <Footer text="Filipe Alves 2023"/>
    </ContainerPincipal>
  );
};
