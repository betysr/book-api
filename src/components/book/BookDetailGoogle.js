import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./bookDetail.css";
import Container from "react-bootstrap/Container";
import PacmanLaoder from "react-spinners/PacmanLoader";
import axios from "axios";
import tempImage from "../../assets/mainPage.jpg"

function BookDetailGoogle() {
  const { id } = useParams();
  const [bookData, setBookData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
      if (id) {
        axios
          .get(
            `https://www.googleapis.com/books/v1/volumes/${id}`
          )
          .then((res) => {
            console.log("res", res.data.volumeInfo);
            setBookData(res.data.volumeInfo);
            console.log("bookData", bookData);
            setIsLoading(false);
          })
          .catch((err) => setError(err));
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
                image={bookData.volumeInfo.image_url ? bookData.volumeInfo.image_url.smallThumbnail : tempImage }
                alt="Live from space album cover"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent
                  sx={{ flex: "2 1 1" }}
                  style={{ textAlign: "center" }}
                >
                  <h3>{bookData.volumeInfo.title.toUpperCase()}</h3>
                  <h5>{bookData.volumInfo.authors.toUpperCase()}</h5>
                  <h6>DESCRIPTION</h6>
                  <p>{bookData.volumeInfo.description}</p>
                </CardContent>
              </Box>
            </Card>
          </Container>
        </div>
      )}
    </div>
  );
}

export default BookDetailGoogle;
