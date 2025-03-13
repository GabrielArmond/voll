import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Footer from './components/Footer';
import Graphic from './components/Graphic';
import Header from './components/Header';
import Rating from './components/Rating';
import Subtitle from './components/Subtitle';
import TableComponent from './components/Table';
import Title from './components/Title';
import useDataConsultation from './useDataConsultation';
import useDataProfessional from './useDataProfessional';

function App() {

  const { data: consultations, error: errorConsultations } = useDataConsultation()
  const { data: professionals, error: errorProfessionals } = useDataProfessional()

  if (errorConsultations || errorProfessionals) {
    console.log('Ocorreu um erro na requisição')
  }

  return (
    <>
      <Header />
      <Container>
        <Title>
          Área Administrativa
        </Title>
        <Button>
          Cadastrar especialista
        </Button>
        <Title image="consultation">
          Consultas do dia
        </Title>
        <TableComponent consultations={consultations} />
        <Title image="graphic">
          Consultas mensais por especialista
        </Title>
        <Subtitle>
          Dezembro/22
        </Subtitle>
        <Graphic consultations={consultations} professionals={professionals} />
        <Title image="rating">
          Avaliações de especialistas
        </Title>
        <Rating professionals={professionals} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
