import { Container, Navbar, Form } from 'react-bootstrap';
import S from './styles.module.scss';

type HeaderProps = {
  onSearchChange: (value: string) => void;
};

const Header = ({ onSearchChange }: HeaderProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value); // Atualiza o estado do Home a cada tecla
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Pokémon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Form className={`${S.forms} d-flex`}>
            <Form.Control
              type="search"
              placeholder="Buscar por nome ou tipo"
              className={S.input}
              aria-label="Search"
              onChange={handleInputChange} // Chama o manipulador de mudança
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
