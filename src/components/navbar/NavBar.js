import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Link to={`/`}>
            <Button variant="contained">BETUL'S LIBRARY</Button>
          </Link>
          <Nav>
            <Link to={`/`}>
              <Button variant="contained">HOME</Button>
            </Link>
            <Link to={`/bookList`}>
              <Button variant="contained">BOOKS</Button>
            </Link>
            <Link to={`/favorite`}>
              <Button variant="contained">FAVORITE BOOKS</Button>
            </Link>
            <Link to={`/search`}>
              <Button variant="contained">SEARCH</Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
