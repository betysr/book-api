import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import PacmanLaoder from "react-spinners/PacmanLoader";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./search.css";
import tempImage from "../../assets/mainPage.jpg";
import FavIcon from "./FavIcon";

function Search() {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const searchBook = () => {
    console.log("search", search);
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU" +
          "&maxResults=20"
      )
      .then((res) => {
        setBookData(res.data.items);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  };
  return (
    <div className="mainDiv">
      <div className="outerSearchBar">
        <div className="searchBar">
          {error && <h5>Something went wrong!</h5>}
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
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search a Book"
                inputProps={{ "aria-label": "Search a Book" }}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <IconButton
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
                onClick={(e) => {
                  if(search.length!==0){
                    searchBook(e);
                    setIsLoading(true);
                  }
                }}
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          )}
        </div>
      </div>
      <div>
        <Container>
          <Row>
            {bookData.length > 0 ? (
              bookData.map((book, index) => {
                const newBook = {
                  id: book.id,
                  title: book.volumeInfo.title,
                  description: book.volumeInfo.description,
                  authors: book.volumeInfo.authors,
                  image_url: book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.smallThumbnail
                    : tempImage,
                  isGoogleApi: true,
                };
                return (
                  <Col
                    xs={6}
                    md={4}
                    sm={6}
                    lg={3}
                    style={{ marginBottom: "3rem" }}
                    key={index}
                  >
                    <Container>
                      <div
                        className="card"
                        style={{ width: "100%", height: 400 }}
                      >
                        <a className="addIcon">
                          <FavIcon book={newBook}></FavIcon>
                        </a>
                        <img
                          src={
                            book.volumeInfo.imageLinks
                              ? book.volumeInfo.imageLinks.smallThumbnail
                              : tempImage
                          }
                          alt="Avatar"
                          height={300}
                        />

                        <div className="card-body">
                          <h6>{book.volumeInfo.title.toUpperCase()}</h6>
                        </div>
                      </div>
                    </Container>
                  </Col>
                );
              })
            ) : (
              <div className="default"></div>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Search;
