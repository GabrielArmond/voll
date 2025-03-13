import rating from './assets/avaliacao.png'
import graphic from './assets/grafico.png'
import consultation from './assets/consulta.png'
import React from 'react'
import styled from 'styled-components'

interface Props {
  image?: string,
  children?: React.ReactNode
}

interface IImage {
  rating: string,
  graphic: string,
  consultation: string
}

const StyledSpan = styled.span<Props>`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 18px;
  height: 23px;
  margin-right: 5px;
  margin-bottom: 0;
  background-image: ${props => props.image ? `url(${props.image})` : 'none'}
`

const StyledTitle = styled.h2`
  margin-top: 1em;
  color: var(--azul-claro);
`

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`

function Title({ image, children }: Props) {
  const imageList: IImage = {
    rating: rating,
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