import React from "react";
import Container from "react-bootstrap/Container";
import "./books.css";
import FavIcon from "../book/FavIcon";
import { useNavigate } from "react-router-dom";

function Book({ book }) {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="card" style={{ width: "100%", height: 400 }} onClick={()=>navigate(`/book/${book.id}`)}>
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
