import styled from "styled-components";

const Button = styled.button`
  background-color: var(--azul-escuro);
  border-radius: 8px;
  padding: 12px 16px;
  color: var(--branco);
  border: none;
  margin-top: .5em;
  font-weight: 700;
  line-height: 19px;
  cursor: pointer;

  &:hover {
    background-color: var(--azul-claro);
    transition-duration: 300ms;
  }
`

export default Button