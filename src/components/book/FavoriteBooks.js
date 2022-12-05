import React, { useContext } from "react";
import { FavoriteBookContext } from "../../contexts/favoriteBookContext";
import Container from "react-bootstrap/Container";
import "./favoriteBooks.css";
import Book from "./Book";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FavoriteBooks() {
  const { favoriteBooks } = useContext(FavoriteBookContext);

  return (
    <div style={{ height: "100vh" }} className="favoriteBookList">
      <Container>
        <Row>
          {favoriteBooks.length !== 0 ? (
            favoriteBooks.map((book, index) => {
              return (
                <Col
                  xs={6}
                  md={4}
                  sm={6}
                  lg={3}
                  style={{ marginBottom: "3rem" }}
                key={index}>
                  <Book book={book} key={index} />
                </Col>
              );
            })
          ) : (
            <div style={{height:'60vh', display:"flex", textAlign:"center", alignItems:"center", justifyContent:"center"}}>
              <p>You don't have any favorite book.</p>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default FavoriteBooks;
