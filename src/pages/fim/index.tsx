import { useNavigate} from "react-router-dom";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

import { Container, Conteudo, Img } from "./styles";

export const Fim = () => {
const navigate = useNavigate()
  const paginaInicio = () =>{
    navigate("/")
  }
  return (
      <Container>
        <Header onClick={paginaInicio} title="Caixa de Pandora - Fim" tituloBtn={"Inicio"}  />
        <Conteudo>
        <h1>Obrigado por Jogar</h1>
        <Img>
        <img src="https://st2.depositphotos.com/7865540/10807/i/450/depositphotos_108072436-stock-photo-torn-brown-paper.jpg" alt="imagen de adeus" />
        </Img>
        <p>Gostou do Jogo? Conte-nos o que achou!!!</p>
        <ul>
        <a href="https://www.linkedin.com/in/filipeqalves" target="_blank">
          <li>LINKEDIN</li>
        </a>
        <a href="https://github.com/lipeqalves/refactor-projeto-jogo" target="_blank">
          <li>GITHUB</li>
        </a>
        <a href="mailto:lipeqa@gmail.com">
          <li>EMAIL</li>
        </a>

        </ul>
        </Conteudo>
        <Footer text="Filipe Alves 2023"/>
      </Container>
  );
};
