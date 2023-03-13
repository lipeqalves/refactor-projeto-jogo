import styled, { css } from 'styled-components'

interface IProps {
  isDisabled: boolean,
}

export const ButtonStyled = styled.button<IProps>`

    ${(props) => {
    switch (props.isDisabled) {
      case true:
        return css`
          background-color:rgba(255, 255, 255, .5);
          border: none;
          color: #ffffff;
          font-weight: bold;
          font-size: 16px;
          padding: 0.5em;
          border-radius: 5px;

    &:hover{
      cursor: wait;
    }
        `;
      default:
        return css`
          background: #00bf72;
    border: none;
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
    padding: 0.5em;
    border-radius: 5px;

    &:hover{
      opacity: 0.6;
      cursor: pointer;
    }
        `;
    }
  }}

`
