import { useContext } from "react";
import {  useNavigate} from "react-router-dom";
import { Button } from "../../../components/button";
import { CardPersonagem } from "../../../components/card_personagem";
import { Footer } from "../../../components/footer";
import { Header } from "../../../components/header";
import { GlobalContext } from "../../../context/context";
import { Container, Conteudo,ContainerPincipal, DivImg } from "../styles/styles";


export const Pandora = () => {
const navigate = useNavigate()
const {setCont,setResposta, setMsg, setStege,setPontuacao} = useContext(GlobalContext)
  const nextStage = () =>{
    setStege(1)
    setCont(1)
    setResposta("")
    setMsg("")
    setPontuacao(0)
    navigate("/pandora/stegeone")
  }
  const paginaInicial = () =>{
    navigate("/")
  }
  return (
    <ContainerPincipal>
    <Header onClick={paginaInicial } title="PANDORA" tituloBtn={"Voltar"}  />
    <Container>
    <DivImg>
      <CardPersonagem nomePersonagem={"Pandora"} urlImg="https://mitologia.hi7.co/mitologia/mitologia-57ac36985a5fa.jpg" variant={""}/>
    </DivImg>
      <Conteudo>
        <h1>Historia</h1>
        <p>
        Pandora foi a primeira mulher, criada pelos deuses Hefesto e Atena a mando de Zeus,
        que desejava castigar os homens depois que Prometeu entregou a eles o segredo do fogo.
          Pandora recebeu de cada deus ou deusa um dom diferente. Atena lhe deu a inteligência
          ; Afrodite, a beleza; Hermes, a capacidade de mentir e enganar; e assim por diante.
        </p>

        <h4>Principais Habilidades: </h4>
        <ul>
          <li>Inteligência</li>
          <li>Velocidade</li>
          <li>Mestres em Persuasão</li>
          <li> Beleza Irradiante</li>
        </ul>
        <p>
        Zeus então enviou-a para que seduzisse Epimeteu, irmão de Prometeu.Pandora tinha
         um segredo terrível. Ela recebera dos deuses uma caixa selada e que jamais deveria
         ser aberta.
        </p>
        <Button name={"Iniciar"} onClick={nextStage}/>
      </Conteudo>
    </Container>
    <Footer text="Filipe Alves 2023"/>
    </ContainerPincipal>

  );
};
