import { Rating } from "@mui/material"
import IProfessional from "../../../types/IProfessional"
import styled from "styled-components"

const StyledContainer = styled.div`
  flex: 40%;
  max-width: 100%;
  background-color: #ffffff;
  padding: 1em;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
  color: var(--cinza);
  margin-bottom: 2em;
  border-radius: 16px;
`

const StyledContainerGrid = styled(StyledContainer)(() => ({
  [`&:nth-of-type(odd)`]: {
    marginRight: '16px'
  }
}))


const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0
`

const StyledItem = styled.li`
  list-style-type: none;
`

const StyledTitle = styled.p`
  margin: 0;
  font-weight: 700;
`

const StyledSubtitle = styled.p`
  margin: .3em 0;
  font-size: 14px;
`

const StyledInfoItem = styled(StyledItem)`
  flex-grow: 1;
`

const StyledImage = styled.img`
  border-radius: 100%;
  width: 64px;
  height: 64px;
  object-fit:cover;
  border: 2px solid var(--azul-claro);
  margin-right: 1em
`

function Card({ professional }: { professional: IProfessional }) {
  return (
    <StyledContainerGrid>
      <StyledList>
        <StyledItem>
          <StyledImage src={professional.imagem} alt={`Foto de perfil do profissional ${professional.nome}`} />
        </StyledItem>
        <StyledInfoItem>
          <StyledTitle>Dr. {professional.nome}</StyledTitle>
          <StyledSubtitle>{professional.especialidade}</StyledSubtitle>
        </StyledInfoItem>
        <StyledItem>
          <Rating
            name="simple-controlled"
            value={professional.nota}
            readOnly={true} />
        </StyledItem>
      </StyledList>
    </StyledContainerGrid>
  )
}

export default Card