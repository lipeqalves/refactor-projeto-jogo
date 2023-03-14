
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Button } from "../../../../components/button";
import { CardPersonagem } from "../../../../components/card_personagem";
import { Footer } from "../../../../components/footer";
import { Header } from "../../../../components/header";
import { Input } from "../../../../components/input";
import { GlobalContext } from "../../../../context/context";
import { Container, Conteudo,ContainerPincipal, DivImg, Msg, Li } from "../../styles/styles.stege";

export const StageThreePandora = () => {
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
    navigate("/pandora/final")
  }
  return (
    <ContainerPincipal>
    <Header onClick={paginaInicial} title="PANDORA" tituloBtn={"Voltar"} isDisabled={!isDisabled} />
    <Container>
      <DivImg >
      <CardPersonagem  nomePersonagem={"Pandora"} urlImg="https://mitologia.hi7.co/mitologia/mitologia-57ac36985a5fa.jpg" variant={""}/>
      </DivImg>
      <Conteudo>
        <h1>Stege Three</h1>
        <p>
        Zeus a dá por esposa para Epimeteu e, como presente de casamento, lhe oferta uma Caixa
         com tudo o que há no mundo e recomenda que jamais a abra. Pandora abre a Caixa e ao ver
         tudo qudela saia, assustada, tenta fechá-la ficando presa dentro da mesma somente
         um item. Qual?
        </p>
        <ul>
          <Li error={isDisabled}>a) Esperança</Li>
          <Li>b) Vida</Li>
          <Li>c) Amor</Li>
          <Li>d) Dor</Li>
          <Li>e) Sorte</Li>
        </ul>
        {cont <= 3 && resposta !== "a" ? <><Input  /> <Msg error={isDisabled}>{msg}</Msg> </>:<Msg error={isDisabled} >{msg}</Msg> }
        <Button name={"Resultado"} onClick={nextStage } isDisabled={isDisabled}  />
      </Conteudo>
    </Container>
    <Footer text="Filipe Alves 2023"/>
    </ContainerPincipal>
  );
};
