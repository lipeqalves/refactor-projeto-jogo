
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Button } from "../../../../components/button";
import { CardPersonagem } from "../../../../components/card_personagem";
import { Footer } from "../../../../components/footer";
import { Header } from "../../../../components/header";
import { Input } from "../../../../components/input";
import { GlobalContext } from "../../../../context/context";
import { Container, Conteudo,ContainerPincipal, DivImg, Msg, Li } from "../../styles/styles.stege";

export const StageOneEpimeteu = () => {
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
  navigate("/epimeteu/stegetwo")

}

  return (

    <ContainerPincipal>
    <Header onClick={paginaIniciar} title="EPIMETEU" tituloBtn={"Voltar"} isDisabled={!isDisabled} />
    <Container>
      <DivImg >
      <CardPersonagem  nomePersonagem={"Epimeteu"} urlImg="http://3.bp.blogspot.com/-1hckDuYE1TM/Uemw7BukfYI/AAAAAAAAAMA/byB5BSgSUdU/s1600/EPIMETEU+(%E1%BC%98%CF%80%CE%B9%CE%BC%CE%B7%CE%B8%CE%B5%CF%8D%CF%82).+Por+Genzoman..jpg" variant={""}/>
      </DivImg>

      <Conteudo>
        <h1>Stege One</h1>
        <p>
        Quais eram as principais habilidaddes de Prometeu e Epimeteu Respectivamente
        </p>
        <ul>
          <Li>a) Capoeira e judo</Li>
          <Li>b) Canto e Dança</Li>
          <Li error={isDisabled}>c) Olhar o Futuro e Olhar o Passado</Li>
          <Li>d) Fazer Fogo</Li>
          <Li>e) Nenhuma das anteriores</Li>
        </ul>
        {cont <= 3 && resposta !== "c" ? <><Input  /> <Msg error={isDisabled}>{msg}</Msg> </>:<Msg error={isDisabled} >{msg}</Msg> }
        <Button name={"Proximo"} onClick={nextStage} isDisabled={isDisabled}  />
      </Conteudo>
    </Container>
    <Footer text="Filipe Alves 2023"/>
    </ContainerPincipal>
  );
};
