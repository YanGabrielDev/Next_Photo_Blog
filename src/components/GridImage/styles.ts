import styled, { css } from "styled-components"
import { ThemeInterface } from "../../styles/theme/interface"

export const Container = styled.div`
  margin-bottom: 10rem;
`
export const Grid = styled.div`
  ${({ theme }: ThemeInterface) => css`
    column-count: 3; 
    column-gap: 5px;
}

    @media ${theme.media?.lteLarge}{
    column-count: 3;
    column-gap: 10px;
    }
    @media ${theme.media?.lteMedium}{
      column-count: 2;
      column-gap: 10px;
    }
  `}
`
export const GridElement = styled.div`
  ${({ theme }) => css`
    overflow: hidden;

  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: block;
   
  `}
`;

export const ContentImage = styled.div`
display: inline-block;
position: relative;
border-radius: 10px;
margin: 8px;
overflow: hidden;
height: fit-content;
margin-bottom: 10px;

:hover{
  >div{
    display: flex;
  }   
    }
`

export const MenuContent = styled.div`
${({theme}: ThemeInterface) => css`
  width: 100%;
  height: 2.4rem;
  background-color: ${theme.colors?.opacityBlack};
  color: ${theme.colors?.white};
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  position: absolute;
  bottom: 0;
  @media ${theme.media?.lteLarge}{
      display: flex;
    }
  >a{
  color: white
}
  
`}

`