import IProfessional from "./IProfessional";

export default interface IConsultation extends IProfessional {
  id: number,
  data: string,
  horario: string,
  profissional: IProfessional[],
  especialidade: string,
  paciente: string,
  modalidade: string
}