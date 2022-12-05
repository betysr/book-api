import React, { useState, useEffect } from "react";
import PacmanLaoder from "react-spinners/PacmanLoader";
import "./bookList.css";
import Book from "./Book";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BookList() {
  const URL = "https://example-data.draftbit.com/books?_limit=20";
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setBooks(data);
        setTimeout(() => {
          setIsloading(false);
        }, 1000);
      } catch (err) {
        setError(err);
      }
    })();
  }, []);

  console.log("BookList:", books);
  return (
    <div className="bookList">
      {error && "Error"}
      {isLoading ? (
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <PacmanLaoder color="rgba(214, 107, 54, 1)" />
        </div>
      ) : (
        <Container>
          <Row>
            {books.map((book, index) => {
              return <Col xs={6} md={4} sm={6} lg={3} style={{marginBottom:"3rem"}}>
                <Book book={book} key={index}/>
              </Col>;
            })}
          </Row>
        </Container>
      )}
    </div>
  );
}

export default BookList;
