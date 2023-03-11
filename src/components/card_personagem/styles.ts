import styled, { css } from 'styled-components'

interface Iprops {
  variant: string,
}

export const Container = styled.section<Iprops>`

    ${(props) => {
    switch (props.variant) {
      case "secundary":
        return css`
          background-color: #333;
          width: 250px;
          height: 350px;
          border-radius: 10px;
          outline: 1px solid rgba(255, 255, 255, .5);
          outline-offset: -8px ;
          box-shadow: 3px 3px 10px rgba(0,0,0, .1);
          position: relative;
          overflow: hidden;
        `;
      default:
        return css`
          width: 200px;
          flex-direction: column;
          text-align: center;
          -webkit-box-shadow: 0px 6px 5px 3px rgba(0,0,0,0.75);
          -moz-box-shadow: 0px 6px 5px 3px rgba(0,0,0,0.75);
          box-shadow: 0px 6px 5px 3px rgba(0,0,0,0.75);
          margin: 5px;
          border-radius: 5px;
          color: #333333;
        `;
    }
  }}

`
export const ImgStyled = styled.img<Iprops>`
${(props) => {
  switch (props.variant){
    case "secundary":
      return css`
      position: absolute;
      inset: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
      cursor: pointer;
      opacity: .6;
      transition: transform .75s;
      &:hover{
        transform: scale(1.15);
      }
    `;
    default:
      return css`
        width: 200px;
        height: 300px;
        border-radius: 5px 5px 0 0;
      `
  }
}}
`
export const TituloH3 = styled.h3<Iprops>`
${(props) => {
  switch (props.variant){
    case "secundary":
      return css`
      position: absolute;
      left: 15px;
      bottom: 15px;
      font-family: 'Syncopate', sans-serif;
      font-size: 20px;
      text-shadow: 0 0 1px rgba(0,0,0, .5);
      color:#FAF8FF;
    `;
    default:
      return css`

      `
  }
}}


`
