import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  align-items: end;
  justify-content: space-evenly;
  color: #fff;

`
export const Content = styled.div`

  width: 180px;
  height: 45px;
  gap: 3px;
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  & > select:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    border-radius: 5px;
    color: #333;
  }

  &> select{
    border-radius: 5px;
    padding: 1px;
    background-color: transparent;
    color: #333;
    box-shadow: 0 0 0 0;
    font-size: 16px;
  }
`
