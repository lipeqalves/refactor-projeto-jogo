import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    padding: 1em;
`
export const ContainerImg = styled.section`
display: flex;
justify-content: space-evenly;

@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: none;
  }
`

export const ImgResponsiva = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
   text-align: center;

    & > img{
      width: 300px;
      height: 200px;
      border-radius:5px;
      -webkit-box-shadow: 0px 6px 5px 3px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 6px 5px 3px rgba(0,0,0,0.75);
    box-shadow: 0px 6px 5px 3px rgba(0,0,0,0.75);
    }
  }


`

export const Text = styled.p`
margin: 15px;
color: #fff;
font-weight: 400;
font-size: 14px;
`
export const TextH2 = styled.h2`
color: #fff;

`
