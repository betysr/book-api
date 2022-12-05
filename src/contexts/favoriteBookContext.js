import React, { useState, createContext } from "react";

export const FavoriteBookContext = createContext();

export const FavoriteBookProvider = (props) => {
  const [favoriteBooks, setFavoriteBooks] = useState([
    
  ]);

  const handleAddFavorite = (book) => {
    setFavoriteBooks([...favoriteBooks, book]);
  };

  const handleRemoveFavorite = (book) => {
    setFavoriteBooks(
      favoriteBooks.filter((item) => item.id !== book.id)
    );
  };
  
  const value = { handleAddFavorite, handleRemoveFavorite, favoriteBooks };
  return (
    <FavoriteBookContext.Provider value={value}>
      {props.children}
    </FavoriteBookContext.Provider>
  );
};