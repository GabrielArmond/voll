import styled from 'styled-components'
import facebook from './assets/facebook.png'
import google from './assets/google.png'
import whatsapp from './assets/whatsapp.png'
import instagram from './assets/instagram.png'

const StyledFooter = styled.footer`
  height: 100%;
  color: white;
  padding: 1em;
  background-color: var(--azul-escuro);
  text-align: center
`

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 10%;
  margin: 1em auto;
`

const StyledItem = styled.li`
  list-style-type: none;
`

interface ISocialMedia {
  name: string,
  icon: string
}

function Footer() {

  const socialMediaList: ISocialMedia[] = [
    { name: 'facebook', icon: facebook },
    { name: 'whatsapp', icon: whatsapp },
    { name: 'google', icon: google },
    { name: 'instagram', icon: instagram }
  ]

  return (
    <StyledFooter>
      <StyledList>
        {socialMediaList.map(item => (
          <StyledItem>
            <a href="/#">
              <img src={item.icon} alt={`logo do ${item.name}`} />
            </a>
          </StyledItem>
        ))}
      </StyledList>
      <p>2025 © Desenvolvido por Gabriel Guerra | Projeto fictício sem fins comerciais.</p>
    </StyledFooter>
  )
}

export default Footer