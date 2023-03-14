
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Button } from "../../../../components/button";
import { CardPersonagem } from "../../../../components/card_personagem";
import { Footer } from "../../../../components/footer";
import { Header } from "../../../../components/header";
import { Input } from "../../../../components/input";
import { GlobalContext } from "../../../../context/context";
import { Container, Conteudo,ContainerPincipal, DivImg, Msg } from "../../styles/styles.final";

export const Final = () => {
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
    <Header onClick={paginaInicial} title="ZEUS" tituloBtn={"Voltar"}  />
    <Container>
      <DivImg >
      <CardPersonagem  nomePersonagem={"Zeus"} urlImg="https://uploads.spiritfanfiction.com/historias/capas/202011/o-raio-de-zeus-21101400-261120200857.jpg" variant={""}/>
      </DivImg>
      <Conteudo>
        <h1>Final</h1>
        <p>Pandora e Epimeteu viveram muito felizes, mas a curiosidade dada por Hera
          a perseguia, principalmente em relação ao que havia dentro da caixa dada por Zeus.
          Foi então que, não resistindo a sua curiosidade, Pandora decidiu abrir a caixa
          para descobrir o que se encontrava dentro dela. Quando foi aberta, todos os
          malefícios foram espalhado por toda o mundo. Entre eles estavam miséria, doenças,
          sofrimentos, morte, entre outras coisas. Assustada, tentou fechar a caixa, mas
           já era tarde demais. A única coisa que restou no fundo da caixa foi a esperança.
        </p>

        { <Msg error={isDisabled}>sua pontuação total é: {pontuacao}</Msg> }
        <Button name={"Finalizar Jogo"} onClick={nextStage }   />
      </Conteudo>
    </Container>
    <Footer text="Filipe Alves 2023"/>
    </ContainerPincipal>
  );
};
