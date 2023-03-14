import styled, { css } from 'styled-components'

export const Container = styled.section`
    display: flex;
    justify-content:space-around;
    align-items: center;

`
export const DivImg = styled.div`
 @media (max-width: 900px) {
    display: none;
  }

`
export const ContainerPincipal = styled.main`
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  height:95vh;
  min-height: 100%;
  min-width:  100vw;
  padding: 5px;

`
export const Conteudo = styled.section`

border-radius: 5px;
-webkit-box-shadow: 0px 2px 5px 5px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 2px 5px 5px rgba(0,0,0,0.75);
box-shadow: 0px 2px 5px 5px rgba(0,0,0,0.75);
padding: 5px;
width: 600px;
height: 400px;
font-weight: bold;
justify-content: space-between;

display: flex;
color: #000;
flex-direction: column;
  & > ul{
    margin-left: 20px;
    padding: 10px;
  }

`
interface IProps{
  error?: boolean;
}
export const Msg = styled.p<IProps>`
  text-align: center;
  font-weight: bold;
  font-size: 18px;

  ${(props) =>{
    switch(props.error){
      case false:
        return css`
          color:green;
      `;
      default:
        return css`
          color: red;
    `

    }
  }
  }

`
export const Li = styled.li<IProps>`
  list-style-type: none;
  ${(props) =>{
    switch(props.error){
      case false:
        return css`
          color:green;
      `;
    }
  }
  }

`
