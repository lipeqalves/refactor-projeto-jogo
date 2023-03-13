import styled from 'styled-components'

export const Container = styled.section`
    min-height: 100%;
    display: flex;
    justify-content:space-around;
    align-items: center;
    padding: 5px;
`
export const ContainerPincipal = styled.main`
   height:80vh;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  min-width: 100%;
  width:  100vw;
`
export const DivImg = styled.div`
 @media (max-width: 900px) {
    display: none;
  }

`
export const Conteudo = styled.section`

border-radius: 5px;
-webkit-box-shadow: 0px 2px 5px 5px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 2px 5px 5px rgba(0,0,0,0.75);
box-shadow: 0px 2px 5px 5px rgba(0,0,0,0.75);
padding: 5px;
width: 600px;
height: 80%;
font-weight: bold;
justify-content: space-between;
/* background-image: url("https://e7.pngegg.com/pngimages/1005/529/png-clipart-white-concrete-pillars-illustration-social-media-organization-marketing-column-continental-pillars-love-content-marketing-thumbnail.png"); */

display: flex;
color: #000;
flex-direction: column;
  & > ul{
    margin-left: 20px;
    padding:5px;
  }

  @media (max-width: 500px) {
       height: 100%;
       min-height: 50%;

  }

`
