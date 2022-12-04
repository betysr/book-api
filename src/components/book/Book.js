import React from "react";
import Container from "react-bootstrap/Container";
import "./books.css";

function Book({ book }) {
  return (
    <Container>
      <div className="card" style={{ width: "100%", height: 400 }}>
        <img src={book.image_url} alt="Avatar" height={300} />
        <div className="card-body">
          <h6>{book.title}</h6>
        </div>
      </div>
    </Container>
  );
}

export default Book;
