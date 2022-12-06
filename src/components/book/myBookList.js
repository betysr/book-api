import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./myBookList.css";

function MyBookList() {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [bookList, setBookList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setBookList([...bookList, { bookName: bookName, author: author }]);
  };

  return (
    <div className="mainDiv">
      <h4 style={{ marginBottom: "35px" }}>ADD YOUR BOOK TO BOOK LIST</h4>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <label>
            <TextField
              id="filled-basic"
              label="Book Name"
              variant="filled"
              style={{ marginRight: 5 }}
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />
          </label>
          <label>
            <TextField
              id="filled-basic"
              label="Author Name"
              variant="filled"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </label>
          <Button
            type="submit"
            variant="contained"
            style={{ display: "block", top: "1.5rem" }}
          >
            SAVE
          </Button>
        </form>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "60px",
            textAlign: "center",
          }}
        >
          <ol style={{ textAlign: "center" }}>
            {bookList.map((book, index) => {
              return (
                <ul
                  key={index}
                  style={{
                    backgroundColor: "gray",
                    margin: "4px",
                    textAlign: "center",
                    padding: "12px",
                    borderRadius: "6px",
                  }}
                >
                  {book.bookName}, {book.author}
                </ul>
              );
            })}
          </ol>
        </div>
      </Container>
    </div>
  );
}

export default MyBookList;
