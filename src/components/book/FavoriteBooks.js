import React, {useState,useContext} from "react";
import { FavoriteBookContext } from "../../contexts/favoriteBookContext";
import Container from "react-bootstrap/Container";
import "./favoriteBooks.css";
import Book from "./Book";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FavoriteBooks() {

  const { favoriteBooks } = useContext(FavoriteBookContext);

  console.log("favBooks", favoriteBooks);

  return (
    <div style={{ height: "100vh" }} className='favoriteBookList'>
      <Container>
          <Row>
            {favoriteBooks.map((book, index) => {
              return <Col xs={6} md={4} sm={6} lg={3} style={{marginBottom:"3rem"}}>
                <Book book={book} key={index}/>
              </Col>;
            })}
          </Row>
        </Container>
    </div>
  );
}

export default FavoriteBooks;
