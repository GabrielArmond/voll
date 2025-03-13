import { Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material";
import IConsultation from "../../types/IConsultation";
import styled from "@emotion/styled";
import Button from "../Button";

const StyledSection = styled.section`
  margin: 1em 0;
`

const StyledCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    color: "var(--azul-escuro)",
    fontSize: 18,
    fontWeight: 700,
    fontFamily: "var(--font-princial)"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontFamily: "var(--font-principal)"
  }
}))

const StyledRow = styled(TableRow)(() => ({
  [`&:nth-of-type(odd)`]: {
    backgroundColor: "var(--cinza-claro)",
    align: "right"
  }
}))

function TableComponent({ consultations }: { consultations: IConsultation[] | null }) {
  return (
    <>

      <StyledSection>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="custom-table">
            <TableHead>
              <TableRow>
                <StyledCell>Data</StyledCell>
                <StyledCell>Horário</StyledCell>
                <StyledCell>Profissional</StyledCell>
                <StyledCell>Especialidade</StyledCell>
                <StyledCell>Paciente</StyledCell>
                <StyledCell>Modalidade</StyledCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {consultations?.map(row => {
                return (
                  <StyledRow>
                    <StyledCell component="th" scope="row">
                      {new Date(row.data).toLocaleDateString()}
                    </StyledCell>
                    <StyledCell component="th" scope="row">
                      {row.horario}
                    </StyledCell>
                    <StyledCell component="th" scope="row">
                      {row.profissional[0].nome}
                    </StyledCell>
                    <StyledCell component="th" scope="row">
                      {row.profissional[0].especialidade}
                    </StyledCell>
                    <StyledCell component="th" scope="row">
                      {row.paciente}
                    </StyledCell>
                    <StyledCell component="th" scope="row">
                      {row.modalidade}
                    </StyledCell>
                  </StyledRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledSection>
      <Button>
        Ver mais
      </Button>
    </>
  )
}

export default TableComponent