import React, { useContext, useEffect } from "react";
import { FavoriteBookContext } from "../../contexts/favoriteBookContext";
import Container from "react-bootstrap/Container";
import "./favoriteBooks.css";
import Book from "./Book";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FavoriteBooks() {
  const {favoriteBooks, setFavoriteBooks} = useContext(FavoriteBookContext);
  
  return (
    <div className="favoriteBookList">
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
              <h3>You don't have any favorite book yet.</h3>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default FavoriteBooks;
