import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/mainPage/MainPage";
import FavoriteBooks from "./components/book/FavoriteBooks";
import BookList from "./components/book/BookList";
import Footer from "./components/footer/Footer.js";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bookList" element={<BookList />} />
        <Route path="/favorite" element={<FavoriteBooks />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
