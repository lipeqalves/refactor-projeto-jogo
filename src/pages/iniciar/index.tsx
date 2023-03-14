import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CardPersonagem } from "../../components/card_personagem"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { GlobalContext } from "../../context/context"
import { Container, Conteudo } from "./styles"


export const Iniciar = () =>{
  const {setPersonagem} = useContext(GlobalContext)
  const navigate = useNavigate()

  const mudarPagina = () =>{
    navigate("/")
  }
  const escolherZeus = () =>{
    navigate("/inicio/zeus")
    setPersonagem("zeus")
  }
  const escolherPandora = () =>{
    navigate("/inicio/pandora")
    setPersonagem("pandora")
  }
  const escolherEpimeteu = () =>{
    navigate("/inicio/epimeteu")
    setPersonagem("epimeteu")
  }
  return(

    <Container>
      <Header title="Escolha um personagem" tituloBtn={"voltar"} onClick={mudarPagina} />
      <Conteudo >
      <CardPersonagem onClick={escolherZeus} variant="secundary" nomePersonagem="Zeus" urlImg="https://uploads.spiritfanfiction.com/historias/capas/202011/o-raio-de-zeus-21101400-261120200857.jpg" />
      <CardPersonagem onClick={escolherPandora} variant="secundary" nomePersonagem="Pandora" urlImg="https://mitologia.hi7.co/mitologia/mitologia-57ac36985a5fa.jpg" />
      <CardPersonagem onClick={escolherEpimeteu} variant="secundary" nomePersonagem="Epimeteu" urlImg="http://3.bp.blogspot.com/-1hckDuYE1TM/Uemw7BukfYI/AAAAAAAAAMA/byB5BSgSUdU/s1600/EPIMETEU+(%E1%BC%98%CF%80%CE%B9%CE%BC%CE%B7%CE%B8%CE%B5%CF%8D%CF%82).+Por+Genzoman..jpg" />
      </Conteudo >
      <Footer text="Filipe Alves 2023"/>
    </Container>
  )
}
