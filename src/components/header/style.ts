import styled from 'styled-components'

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 25px 0px 25px;

    @media (max-width: 488px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
    gap: 5px;
  }
`
export const TitleH1 = styled.h1`
display: flex;
font-size: 38px;
font-weight: bold;
color: #ffffff;
margin-bottom:10px ;

@media (max-width: 488px) {
    font-size: 28px;
  }

  @media (max-width: 390px) {
    font-size: 22px;
  }

`

