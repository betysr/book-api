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
import FavIcon from "./FavIcon";
import './search.css';

function Search() {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const searchBook = () => {
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
        console.log(res.data.items);
      })
      .catch((err) => setError(err));
  };
  return (
    <div className="mainDiv">
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
              placeholder="Search Google Maps"
              inputProps={{ "aria-label": "Search a Book" }}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                console.log("search val: ", search);
              }}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={(e) => {
                searchBook(e);
                setIsLoading(true);
              }}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        )}
      </div>
      <div>
        <Container>
          <Row>
            {bookData.map((book, index) => {
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
                      <div className="card-body">
                        <h6>{book.volumeInfo.title.toUpperCase()}</h6>
                      </div>
                    </div>
                  </Container>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Search;
