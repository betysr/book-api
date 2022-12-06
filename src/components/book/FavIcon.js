import React, { useContext,useEffect } from "react";
import { FavoriteBookContext } from "../../contexts/favoriteBookContext";
import heartRegular from "../../assets/heart-regular.svg";
import heartSolid from "../../assets/heart-solid.svg";

function FavIcon({ book }) {
  const { handleAddFavorite, handleRemoveFavorite, favoriteBooks, setFavoriteBooks } =
    useContext(FavoriteBookContext);

  const isFav = (id) => {
    return favoriteBooks.some((book) => book.id === id);
  };
  return (
    <div style={{ width: 20, height: 20, float: "right" }}>
      {isFav(book.id) ? (
        <img
          src={heartSolid}
          alt="favorite-icon"
          onClick={() => {
            handleRemoveFavorite(book);
          }}
        />
      ) : (
        <img
          src={heartRegular}
          alt="favorite-icon"
          onClick={() => {
            handleAddFavorite(book);
          }}
        />
      )}
    </div>
  );
}

export default FavIcon;
