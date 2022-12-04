import React from "react";
import Container from "react-bootstrap/Container";
import image from "../../assets/mainPage.jpg";
import "./favoriteBooks.css";

function FavoriteBooks() {
  return (
    <div style={{ height: "100vh" }}>
      <Container>
        <div className="cards">
          <div className="card">
            <img src={image} alt="Avatar" style={{ width: "100%" }} />
            <a className="iconButton">
              <i id="plusIcon" className="shopIcon fa-solid fa-circle-plus"></i>
            </a>
            <div className="cardContent">
              <h1>COFFEE LATTE</h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FavoriteBooks;
