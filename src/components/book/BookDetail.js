import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./bookDetail.css";
import Container from "react-bootstrap/Container";
import PacmanLaoder from "react-spinners/PacmanLoader";

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      if (id) {
        (async () => {
          const response = await fetch(
            `https://example-data.draftbit.com/books/${id}`
          );
          if (!response.ok) {
            throw new Error("Something went wrong with API!");
          }
          const data = await response.json();
          setBook(data);
          setIsLoading(false);
        })();
      }
    } catch (err) {
      setError(err);
    }
  }, [id]);
  return (
    <div className="bookDetailCard">
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxHeight: 300,
          }}
        >
          <Container>
            <Card sx={{ display: "flex", height: 400 }}>
              <CardMedia
                component="img"
                sx={{ maxWidth: 250 }}
                image={book.image_url}
                alt="Live from space album cover"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent
                  sx={{ flex: "2 1 1" }}
                  style={{ textAlign: "center" }}
                >
                  <h3>{book.title.toUpperCase()}</h3>
                  <h5>{book.authors.toUpperCase()}</h5>
                  <h6>DESCRIPTION</h6>
                  <p>{book.description}</p>
                </CardContent>
              </Box>
            </Card>
          </Container>
        </div>
      )}
    </div>
  );
}

export default BookDetail;
