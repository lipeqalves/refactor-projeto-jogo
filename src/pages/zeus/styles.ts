import { Button } from '../../components/button/index';
import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    justify-content:space-around;
    align-items: center;

`

export const ContainerPincipal = styled.main`
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  height:100vh;
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
/* background-image: url("https://e7.pngegg.com/pngimages/1005/529/png-clipart-white-concrete-pillars-illustration-social-media-organization-marketing-column-continental-pillars-love-content-marketing-thumbnail.png"); */

display: flex;
color: #000;
flex-direction: column;
  & > ul{
    margin-left: 20px;
    padding: 10px;
  }

`
