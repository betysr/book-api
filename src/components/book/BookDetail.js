import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./bookDetail.css";
import Container from "react-bootstrap/Container"

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
      console.log("ERR", err);
    }
  }, [id]);
  return (
    <div className="bookDetailCard">
      {isLoading ? (
        "Loading"
      ) : (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Container>
          <Card sx={{ display: "flex" }}>
          <CardMedia
              component="img"
              sx={{ width: 300 }}
              image={book.image_url}
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }} style={{textAlign:"center"}}>
                <h5>
                  {book.title}
                </h5>
                <h6>
                  {book.authors}
                </h6>
                <h5>DESCRIPTION</h5>
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
