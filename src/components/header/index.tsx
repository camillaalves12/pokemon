import { Container, Navbar, NavbarCollapse, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Pokemon</Navbar.Brand>
        <NavbarCollapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contato</Nav.Link>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}

export default Header
