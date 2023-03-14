
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Button } from "../../../../components/button";
import { CardPersonagem } from "../../../../components/card_personagem";
import { Footer } from "../../../../components/footer";
import { Header } from "../../../../components/header";
import { GlobalContext } from "../../../../context/context";
import { Container, Conteudo,ContainerPincipal, DivImg, Msg, } from "../../styles/styles.final";

export const FinalPandora = () => {
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
      <CardPersonagem  nomePersonagem={"Pandora"} urlImg="https://mitologia.hi7.co/mitologia/mitologia-57ac36985a5fa.jpg" variant={""}/>
      </DivImg>
      <Conteudo>
        <h1>Final</h1>
        <p>A partir da abertura da Caixa, os homens passam a viver um
          doloroso processo de hostilidade, guerra, ciúme, doença, morte, tristeza, mentira,
          embuste, traição, trapaça, corrupção… A vingança tão esperada de Zeus em breve
          seria consumada! Agora conseguiria a permissão do Conselho Olímpico para destruir os Seres criados por Prometheus.
        </p>

        { <Msg error={isDisabled}>sua pontuação total é: {pontuacao}</Msg> }
        <Button name={"Finalizar Jogo"} onClick={nextStage }   />
      </Conteudo>
    </Container>
    <Footer text="Filipe Alves 2023"/>
    </ContainerPincipal>
  );
};
