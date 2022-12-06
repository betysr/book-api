import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function NavBar() {
  return (
    <>
      <Navbar variant="light" className="navbar">
        <Container>
          <Link to={`/`}>
            <Button className="navButtons" variant="contained">BETUL'S LIBRARY</Button>
          </Link>
          <Nav>
            <Link to={`/`}>
              <Button className="navButtons" variant="contained">HOME</Button>
            </Link>
            <Link to={`/bookList`}>
              <Button className="navButtons" variant="contained">BOOKS</Button>
            </Link>
            <Link to={`/favorite`}>
              <Button className="navButtons" variant="contained">FAVORITE BOOKS</Button>
            </Link>
            <Link to={`/myBookList`}>
              <Button className="navButtons" variant="contained">MY BOOK LIST</Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
