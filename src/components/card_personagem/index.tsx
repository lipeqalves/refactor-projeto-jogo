import { Container, ImgStyled, TituloH3 } from "./styles"

interface IProps{
    nomePersonagem: string,
    urlImg: string,
    variant: string,
    onClick?: () => void
}
export const CardPersonagem = ({nomePersonagem, urlImg, variant,onClick}:IProps) =>{

    return(
        <Container variant={variant}>
        <ImgStyled variant={variant} src={urlImg} alt="" onClick={onClick} />
        <TituloH3 variant={variant}>{nomePersonagem}</TituloH3>
        </Container>
    )
}
