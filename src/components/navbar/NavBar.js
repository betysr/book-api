import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">BETUL'S LIBRARY</Navbar.Brand>
          <Nav >
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/bookList">BOOKS</Nav.Link>
            <Nav.Link href="/favorite">MY FAVORITE BOOKS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    
  );
}

export default NavBar;