import { Container, ImgStyled } from "./styles"

interface IProps{
    nomePersonagem: string,
    urlImg: string,
}
export const CardPersonagem = ({nomePersonagem, urlImg}:IProps) =>{
    
    return(
        <Container>
        <ImgStyled src={urlImg} alt=""  /> 
        <h3>{nomePersonagem}</h3>
        </Container>
    )
}