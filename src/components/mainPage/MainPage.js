import React from "react";
import mainPageImg from "../../assets/mainPage.jpg";
import "./mainPage.css";

function MainPage() {
  return (
    <div className="mainPage">
      <img
        src={mainPageImg}
        alt={mainPageImg}
        style={{ height: "100vh", width: "100vw" }}
      ></img>
    </div>
  );
}

export default MainPage;
