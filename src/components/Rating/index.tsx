import styled from "styled-components"
import IProfessional from "../../types/IProfessional"
import Card from "./Card"
import Button from "../Button"

const SectionCard = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`

function Rating({ professionals }: { professionals: IProfessional[] | null }) {
  return (
    <>
      <SectionCard>
        {professionals?.map((professional) => {
          return <Card professional={professional} />
        })}
      </SectionCard>
      <Button>
        Ver mais
      </Button>
    </>
  )
}

export default Rating