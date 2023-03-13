
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Button } from "../../../components/button";
import { CardPersonagem } from "../../../components/card_personagem";
import { Footer } from "../../../components/footer";
import { Header } from "../../../components/header";
import { Input } from "../../../components/input";
import { GlobalContext } from "../../../context/context";
import { Container, Conteudo,ContainerPincipal, DivImg, Msg } from "./styles";

export const StageThree = () => {
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
    navigate("/zeus/final")
  }
  return (
    <ContainerPincipal>
    <Header onClick={paginaInicial} title="ZEUS" tituloBtn={"Voltar"} isDisabled={!isDisabled} />
    <Container>
      <DivImg >
      <CardPersonagem  nomePersonagem={"Zeus"} urlImg="https://uploads.spiritfanfiction.com/historias/capas/202011/o-raio-de-zeus-21101400-261120200857.jpg" variant={""}/>
      </DivImg>
      <Conteudo>
        <h1>Stege Three</h1>
        <p>
        Como Zeus previou, Epimeteu não resistiu aos encantos de Pandora.
        Contrariando o aviso do seu irmão Prometeu, de não aceitar nenhum
        presente vindo dos deuses, ele se casou com Pandora. Pandora possuia um item com
        ela(Para usar na vingança de Zeus contra os irmãos), qual era esse item?
        </p>
        <ul>
          <li>a) Uma caixa misteriosa, que não poderia ser aberta</li>
          <li>b) Uma espada</li>
          <li>c) Um veneno mortal</li>
          <li>d) Nenhuma das alternativas</li>
          <li>e) Todas as alternativas</li>
        </ul>
        {cont <= 3 && resposta !== "a" ? <><Input  /> <Msg error={isDisabled}>{msg}</Msg> </>:<Msg error={isDisabled} >{msg}</Msg> }
        <Button name={"Resultado"} onClick={nextStage } isDisabled={isDisabled}  />
      </Conteudo>
    </Container>
    <Footer text="Filipe Alves 2023"/>
    </ContainerPincipal>
  );
};
