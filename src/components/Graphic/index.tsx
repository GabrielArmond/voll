import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import IConsultation from "../../types/IConsultation";
import IProfessional from "../../types/IProfessional";
import useDataGraphic from "./useDataGraphic";
import styled from "styled-components";

interface Props {
  consultations: IConsultation[] | null,
  professionals: IProfessional[] | null
}

interface IData {
  name: string,
  consultations: number
}

const StyledSection = styled.section`
  background-color: var(--branco);
  border-radius: 16px;
`

function Graphic({ consultations, professionals }: Props) {
  let data: IData[] = useDataGraphic({ professionals, consultations })

  return (
    <StyledSection>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart layout="vertical" data={data} margin={{ top: 25, right: 40, left: 40, bottom: 20 }}>
          <XAxis type="number"></XAxis>
          <YAxis type="category" dataKey="name"></YAxis>
          <Bar dataKey="consultations" fill="#083860" barSize={30}></Bar>
        </BarChart>
      </ResponsiveContainer>
    </StyledSection>
  )
}

export default Graphic