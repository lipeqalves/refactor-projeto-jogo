
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Button } from "../../../components/button";
import { CardPersonagem } from "../../../components/card_personagem";
import { Footer } from "../../../components/footer";
import { Header } from "../../../components/header";
import { Input } from "../../../components/input";
import { GlobalContext } from "../../../context/context";
import { Container, Conteudo,ContainerPincipal, DivImg, Msg } from "./styles";

export const StageTwo = () => {
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
    navigate("/zeus/stegethree")
  }

  return (

    <ContainerPincipal>
    <Header onClick={mudarPagina} title="ZEUS" tituloBtn={"Voltar"} isDisabled={!isDisabled} />
    <Container>
      <DivImg >
      <CardPersonagem  nomePersonagem={"Zeus"} urlImg="https://uploads.spiritfanfiction.com/historias/capas/202011/o-raio-de-zeus-21101400-261120200857.jpg" variant={""}/>
      </DivImg>

      <Conteudo>
        <h1>Stege Two</h1>
        <p>
        Dando continuidade a sua vingança, Zeus reune alguns deuses para criar
        um presente que acreditava ser irrecusável.
        A mais Perfeita e irresistível mulher. Qual o nome dessa mulher? ?
        </p>
        <ul>
          <li>a) Antena</li>
          <li>b) Pandora</li>
          <li>c) Afrodite</li>
          <li>d) Gaia</li>
          <li>e) Réia</li>
        </ul>
        {cont <= 3 && resposta !== "b" ? <><Input  /> <Msg error={isDisabled}>{msg}</Msg> </>:<Msg error={isDisabled} >{msg} </Msg> }
        <Button name={"Proximo"} onClick={nextStage} isDisabled={isDisabled}  />
      </Conteudo>
    </Container>
    <Footer text="Filipe Alves 2023"/>
    </ContainerPincipal>
  );
};
