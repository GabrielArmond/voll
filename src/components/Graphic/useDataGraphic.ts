import IConsultation from "../../types/IConsultation"
import IProfessional from "../../types/IProfessional"

interface IData {
  name: string,
  consultations: number
}

interface Props {
  professionals: IProfessional[] | null,
  consultations: IConsultation[] | null
}

const useDataGraphic = ({ professionals, consultations }: Props) => {
  let data: IData[] = []

  if (professionals && consultations) {
    data = professionals.map((professional) => ({
      name: professional.nome,
      consultations: consultations.filter((consultation) => consultation.profissional.some((prof) => prof.nome === professional.nome)).length
    }))
  }

  return data
}

export default useDataGraphic