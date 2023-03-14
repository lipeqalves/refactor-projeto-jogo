import { useContext } from "react";
import {  useNavigate} from "react-router-dom";
import { Button } from "../../../components/button";
import { CardPersonagem } from "../../../components/card_personagem";
import { Footer } from "../../../components/footer";
import { Header } from "../../../components/header";
import { GlobalContext } from "../../../context/context";
import { Container, Conteudo,ContainerPincipal, DivImg } from "../styles/styles";


export const Epimeteu = () => {
const navigate = useNavigate()
const {setCont,setResposta, setMsg, setStege,setPontuacao} = useContext(GlobalContext)
  const nextStage = () =>{
    setStege(1)
    setCont(1)
    setResposta("")
    setMsg("")
    setPontuacao(0)
    navigate("/epimeteu/stegeone")
  }
  const paginaInicial = () =>{
    navigate("/")
  }
  return (
    <ContainerPincipal>
    <Header onClick={paginaInicial } title="EPIMETEU" tituloBtn={"Voltar"}  />
    <Container>
    <DivImg>
      <CardPersonagem nomePersonagem={"Epimeteu"} urlImg="http://3.bp.blogspot.com/-1hckDuYE1TM/Uemw7BukfYI/AAAAAAAAAMA/byB5BSgSUdU/s1600/EPIMETEU+(%E1%BC%98%CF%80%CE%B9%CE%BC%CE%B7%CE%B8%CE%B5%CF%8D%CF%82).+Por+Genzoman..jpg" variant={""}/>
    </DivImg>
      <Conteudo>
        <h1>Historia</h1>
        <p>
        Epimeteu é um titã (da segunda geração), criou os animais e deu-lhes os atributos.
        Quando chegou ao homem, não havia mais nenhuma qualidade para dar-lhe.
        Pediu socorro ao seu irmão Prometeu, que então roubou o fogo dos deuses e o
        ofertou aos homens,ensinando-lhe também como trabalhar com ele.
        </p>

        <h4>Principais Habilidades: </h4>
        <ul>
          <li>Visão Retrospectiva</li>
          <li>Velocidade</li>
          <li>Força</li>
        </ul>
        <p>
        Foi esposo de Pandora, um presente de Zeus para ele. Na verdade Zeus queria se
        vingar de Prometeu, Epimeteu e da humanidade, que possuía o fogo que fôra roubado
        dos céus.
        </p>
        <Button name={"Iniciar"} onClick={nextStage}/>
      </Conteudo>
    </Container>
    <Footer text="Filipe Alves 2023"/>
    </ContainerPincipal>

  );
};
