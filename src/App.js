import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavoriteBooks from "./components/book/FavoriteBooks";
import BookList from "./components/book/BookList";
import Footer from "./components/footer/Footer.js";
import { FavoriteBookProvider } from "./contexts/favoriteBookContext";
import BookDetail from "./components/book/BookDetail";
import Search from "./components/book/Search.js";
import BookDetailGoogle from "./components/book/BookDetailGoogle";
import MyBookList from "./components/book/myBookList";

function App() {
  return (
    <div className="App">
      <FavoriteBookProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/bookList" element={<BookList />} />
            <Route path="/favorite" element={<FavoriteBooks />} />
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/book2/:id" element={<BookDetailGoogle />} />
            <Route path="/myBookList" element={<MyBookList />} />
          </Routes>
          <Footer />
        </Router>
      </FavoriteBookProvider>
    </div>
  );
}

export default App;
