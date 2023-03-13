import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    height:100vh;
    min-height: 100%;
    min-width:  100vw;
    padding: 5px;
`

export const Conteudo = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
    gap: 20px;
  }

`
