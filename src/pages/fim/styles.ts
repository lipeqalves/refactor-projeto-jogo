
import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    height:80vh;
    min-height: 100%;

`
export const Conteudo = styled.div`
  display: flex;
  flex-direction: column ;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100%;
  &> ul{
    display: flex;
    gap: 60px;
    list-style-type: none;
    @media (max-width: 700px) {
      gap: 30px;
  }
  }
`
export const Img = styled.div`
  &>img{
    text-align: center;
   width: 400px;
   height: 300px;
   border-radius:5px;
   -webkit-box-shadow: 0px 6px 5px 3px rgba(0,0,0,0.75);
   -moz-box-shadow: 0px 6px 5px 3px rgba(0,0,0,0.75);
   box-shadow: 0px 6px 5px 3px rgba(0,0,0,0.75);

   @media (max-width: 700px) {
    width: 300px;
    height: 200px;
  }
  }



`
