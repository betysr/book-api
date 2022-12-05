import React from "react";
import Container from "react-bootstrap/Container";
import "./books.css";
import FavIcon from "../book/FavIcon";

function Book({ book }) {
  return (
    <Container>
      <div className="card cover" style={{ width: "100%", height: 400 }}>
      <a className="addIcon"><FavIcon book={book}></FavIcon></a>
        <img src={book.image_url} alt="Avatar" height={300} />
        <div className="card-body">
          <h6>{book.title.toUpperCase()}</h6>
        </div>
      </div>
    </Container>
  );
}

export default Book;
