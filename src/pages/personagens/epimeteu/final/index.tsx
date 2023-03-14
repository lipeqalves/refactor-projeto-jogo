
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Button } from "../../../../components/button";
import { CardPersonagem } from "../../../../components/card_personagem";
import { Footer } from "../../../../components/footer";
import { Header } from "../../../../components/header";
import { GlobalContext } from "../../../../context/context";
import { Container, Conteudo,ContainerPincipal, DivImg, Msg } from "../../styles/styles.final";

export const FinalEpimeteu = () => {
const navigate = useNavigate()
const { isDisabled, pontuacao,setCont, resposta,setResposta, setMsg} = useContext(GlobalContext)
const paginaInicial = () =>{
  setCont(1);
  setResposta("")
  setMsg("")
  navigate("/inicio")
}
const nextStage = () => {
  setCont(1);
  setResposta("")
  setMsg("")
  navigate("/fim")
}
  return (
    <ContainerPincipal>
    <Header onClick={paginaInicial} title="PANDORA" tituloBtn={"Voltar"}  />
    <Container>
      <DivImg >
      <CardPersonagem  nomePersonagem={"Epimeteu"} urlImg="http://3.bp.blogspot.com/-1hckDuYE1TM/Uemw7BukfYI/AAAAAAAAAMA/byB5BSgSUdU/s1600/EPIMETEU+(%E1%BC%98%CF%80%CE%B9%CE%BC%CE%B7%CE%B8%CE%B5%CF%8D%CF%82).+Por+Genzoman..jpg" variant={""}/>
      </DivImg>
      <Conteudo>
        <h1>Final</h1>
        <p>Sem hesitar, Epimeteu aceitou
          o presente. Pandora e Epimeteu viveram muito felizes, mas a curiosidade dada por
          Hera a perseguia, principalmente em relação ao que havia dentro da caixa dada por Zeus.
          Foi então que, não resistindo a sua curiosidade, Pandora decidiu abrir a caixa para descobrir
          o que se encontrava dentro dela.
          Quando foi aberta, todos os malefícios foram liberados pela Terra. Entre eles estavam
          miséria, doenças, sofrimentos, morte, entre outras coisas. Assustada, tentou fechar a
          caixa, mas já era tarde demais. A única coisa que restou no fundo da caixa foi a esperança.
        </p>

        { <Msg error={isDisabled}>sua pontuação total é: {pontuacao}</Msg> }
        <Button name={"Finalizar Jogo"} onClick={nextStage }   />
      </Conteudo>
    </Container>
    <Footer text="Filipe Alves 2023"/>
    </ContainerPincipal>
  );
};
