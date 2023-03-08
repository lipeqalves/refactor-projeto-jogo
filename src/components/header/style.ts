import styled from 'styled-components'

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 25px 0px 25px;

    @media (max-width: 488px) {
    flex-direction: column;
    justify-content: center;
    font-size: 18px;
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

`

