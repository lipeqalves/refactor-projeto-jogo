import { useContext } from "react";
import {  useNavigate} from "react-router-dom";
import { Button } from "../../../components/button";
import { CardPersonagem } from "../../../components/card_personagem";
import { Footer } from "../../../components/footer";
import { Header } from "../../../components/header";
import { GlobalContext } from "../../../context/context";
import { Container, Conteudo,ContainerPincipal, DivImg } from "../styles/styles";


export const Zeus = () => {
const navigate = useNavigate()
const {setCont,setResposta, setMsg, setStege,setPontuacao} = useContext(GlobalContext)
  const nextStage = () =>{
    setStege(1)
    setCont(1)
    setResposta("")
    setMsg("")
    setPontuacao(0)
    navigate("/zeus/stegeone")
  }
  const paginaInicial = () =>{
    navigate("/")
  }

  return (
    <ContainerPincipal>
    <Header onClick={paginaInicial } title="ZEUS" tituloBtn={"Voltar"}  />
    <Container>
    <DivImg>
      <CardPersonagem nomePersonagem={"Zeus"} urlImg="https://uploads.spiritfanfiction.com/historias/capas/202011/o-raio-de-zeus-21101400-261120200857.jpg" variant={""}/>
    </DivImg>
      <Conteudo>
        <h1>Historia</h1>
        <p>
          Zeus era a divindade mais poderosa e mais importante do panteão grego.
          Era conhecido como rei dos deuses e deus do raio, do trovão e dos céus.
          Era filho do titã Cronos e tornou-se comandante do Universo após libert
          ar seus irmãos do estômago de seu pai e derrotá-lo em uma batalha.
        </p>
        <h4>Principais Habilidades: </h4>
        <ul>
          <li>Força</li>
          <li>Rapidez</li>
          <li>Energia</li>
          <li>Liderança</li>
        </ul>
        <p>
          Tudo começa quando Zeus, o Deus de todos os deuses, resolveu arquitetar
          um plano para se voltar contra a ousadia de Prometeu – que entregara aos
          homens a capacidade de controlar o fogo. Para tanto, Zeus decide criar uma mulher
          repleta de dotes oferecidos pelos deuses e a oferece a Epimeteu, irmão de Prometeu.
        </p>
        <Button name={"Iniciar"} onClick={nextStage}/>
      </Conteudo>
    </Container>
    <Footer text="Filipe Alves 2023"/>
    </ContainerPincipal>

  );
};
