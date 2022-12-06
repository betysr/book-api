import React, { useContext, useState } from "react";
import { FavoriteBookContext } from "../../contexts/favoriteBookContext";
import Container from "react-bootstrap/Container";
import "./favoriteBooks.css";
import Book from "./Book";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PacmanLaoder from "react-spinners/PacmanLoader";

function FavoriteBooks() {
  const { favoriteBooks, setFavoriteBooks } = useContext(FavoriteBookContext);
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(true);

  setTimeout(() => {
    setIsloading(false);
  }, 1000);

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
        <Container style={{ width: "auto" }}>
          <h2 style={{ textAlign: "center", padding: 25, marginBottom: 20 }}>
            FAVORITE BOOKS
          </h2>
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
                    key={index}
                  >
                    <Book book={book} key={index} />
                  </Col>
                );
              })
            ) : (
              <div
                style={{
                  height: "100vh",
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h3>You don't have any favorite book yet.</h3>
              </div>
            )}
          </Row>
        </Container>
      )}
    </div>
  );
}

export default FavoriteBooks;
