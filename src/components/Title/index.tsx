import avaliation from './assets/avaliacao.png'
import graphic from './assets/grafico.png'
import consultation from './assets/consulta.png'
import React from 'react'
import styled from 'styled-components'

interface Props {
  image?: string,
  children?: React.ReactNode
}

interface IImage {
  avaliation: string,
  graphic: string,
  consultation: string
}

const StyledSpan = styled.span<Props>`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 25px;
  height: 25px;
  background-image: ${props => props.image ? `url(${props.image})` : 'none'}
`

const StyledTitle = styled.h2`
  color: var(--azul-claro);
`

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`

function Title({ image, children }: Props) {

  const imageList: IImage = {
    avaliation: avaliation,
    graphic: graphic,
    consultation: consultation
  }

  return (
    <StyledContainer>
      {image && <StyledSpan image={imageList[image as keyof IImage]} />}
      <StyledTitle>{children}</StyledTitle>
    </StyledContainer>
  )
}

export default Title