import { CardPersonagem } from "../card_personagem";
import { Container, ContainerImg, Text, TextH2,ImgResponsiva } from "./styles";


// interface IProps{
//     nomePersonagem: string,
//     urlImg: string,
// }
export const CardPrincipal = () => {
  return (
    <Container>
      <article>
        <TextH2>Prólogo</TextH2>
        <Text>
          Prometeu e seu irmão Epimeteu criaram o homem e por Prometeu querer
          que sua criação se sobressaísse dentre todas as criaturas, lhe deu o
          fogo. Fogo esse que foi tirado por Zeus, fazendo Prometeu ir ao Olimpo
          e roubar a chama e devolver aos homens, sua criação. Prometeu, por
          conseguir prever o futuro, avisa seu irmão, Epimeteu, antes que seu
          castigo aconteça e lhe diz para nunca aceitar sequer um presente dos
          deuses, pois Zeus queria uma forma de se vingar. Após tentativas, os
          deuses decidem criar a mais linda e cativante mulher, com o nome de
          Pandora, e, junto com ela, fora mandada uma caixa que lhe foi confiada
          a não abrir em hipótese alguma e que deveria ser entregue a Epimeteu.
          Epimeteu então, fascinado, acaba por receber Pandora e sua caixa,
          porém, ela não o entregou a caixa. Mais tarde à sua chegada, Pandora
          se vê tentada a abrir a caixa e ver seu conteúdo e acaba por libertar
          sobre o mundo todo o mal que acompanha a humanidade nos dias de hoje,
          tirando toda a sua pureza e harmonia.
        </Text>
      </article>
      <ContainerImg>
      <CardPersonagem nomePersonagem="Zeus" urlImg="https://uploads.spiritfanfiction.com/historias/capas/202011/o-raio-de-zeus-21101400-261120200857.jpg" variant={""} />
      <CardPersonagem nomePersonagem="Pandora" urlImg="https://mitologia.hi7.co/mitologia/mitologia-57ac36985a5fa.jpg" variant={""} />
      <CardPersonagem nomePersonagem="Epimeteu" urlImg="http://3.bp.blogspot.com/-1hckDuYE1TM/Uemw7BukfYI/AAAAAAAAAMA/byB5BSgSUdU/s1600/EPIMETEU+(%E1%BC%98%CF%80%CE%B9%CE%BC%CE%B7%CE%B8%CE%B5%CF%8D%CF%82).+Por+Genzoman..jpg" variant={""} />
      </ContainerImg>
      <ImgResponsiva>
      <img src="http://grecopersa.weebly.com/uploads/6/8/8/8/6888060/1377967282.jpg" alt="" />
      </ImgResponsiva>

    </Container>
  );
};
