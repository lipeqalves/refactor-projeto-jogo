
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Button } from "../../../components/button";
import { CardPersonagem } from "../../../components/card_personagem";
import { Footer } from "../../../components/footer";
import { Header } from "../../../components/header";
import { Input } from "../../../components/input";
import { GlobalContext } from "../../../context/context";
import { Container, Conteudo,ContainerPincipal, DivImg, Msg } from "./styles";

export const StageOne = () => {
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
  navigate("/zeus/stegetwo")

}

  return (

    <ContainerPincipal>
    <Header onClick={paginaIniciar} title="ZEUS" tituloBtn={"Voltar"} isDisabled={!isDisabled} />
    <Container>
      <DivImg >
      <CardPersonagem  nomePersonagem={"Zeus"} urlImg="https://uploads.spiritfanfiction.com/historias/capas/202011/o-raio-de-zeus-21101400-261120200857.jpg" variant={""}/>
      </DivImg>

      <Conteudo>
        <h1>Stege One</h1>
        <p>
        Zeus esta tentando se vingar de dois titans, por terem roubado a
        chama sagrada e entrgue aos humanos. Quem são esses titans?
        </p>
        <ul>
          <li>a) Cronos e Gaia</li>
          <li>b) Hades e Poseidon</li>
          <li>c) Epimeteu e Prometeu</li>
          <li>d) Pandora e Prometeu</li>
          <li>e) Epimeteu e Atenas</li>
        </ul>
        {cont <= 3 && resposta !== "c" ? <><Input  /> <Msg error={isDisabled}>{msg}</Msg> </>:<Msg error={isDisabled} >{msg}</Msg> }
        <Button name={"Proximo"} onClick={nextStage} isDisabled={isDisabled}  />
      </Conteudo>
    </Container>
    <Footer text="Filipe Alves 2023"/>
    </ContainerPincipal>
  );
};
