import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/mainPage/MainPage";
import FavoriteBooks from "./components/book/FavoriteBooks";
import BookList from "./components/book/BookList";
import Footer from "./components/footer/Footer.js";
import { FavoriteBookProvider } from "./contexts/favoriteBookContext";
import BookDetail from "./components/book/BookDetail";

function App() {
  return (
    <div className="App">
      <FavoriteBookProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/bookList" element={<BookList />} />
            <Route path="/favorite" element={<FavoriteBooks />} />
            <Route path="/book/:id" element={<BookDetail />} />
          </Routes>
          <Footer />
        </Router>
      </FavoriteBookProvider>
    </div>
  );
}

export default App;
