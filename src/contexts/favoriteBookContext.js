import React, { useState, createContext } from "react";

export const FavoriteBookContext = createContext();

export const FavoriteBookProvider = (props) => {
  const [favoriteBooks, setFavoriteBooks] = useState([
    {
        id: 12,
        title: "The Hitchhiker's Guide to the Galaxy",
        authors: "Douglas Adams",
        description: "Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker's Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor.Together this dynamic pair begin a journey through space aided by quotes from The Hitchhiker's Guide (\"A towel is about the most massively useful thing an interstellar hitchhiker can have\") and a galaxy-full of fellow travelers: Zaphod Beeblebrox—the two-headed, three-armed ex-hippie and totally out-to-lunch president of the galaxy; Trillian, Zaphod's girlfriend (formally Tricia McMillan), whom Arthur tried to pick up at a cocktail party once upon a time zone; Marvin, a paranoid, brilliant, and chronically depressed robot; Veet Voojagig, a former graduate student who is obsessed with the disappearance of all the ballpoint pens he bought over the years.",
        edition: "",
        format: "Paperback",
        num_pages: 193,
        rating: 4.21,
        rating_count: 1155911,
        review_count: 23919,
        genres: "Science Fiction, Fiction, Humor, Fantasy, Classics",
        genre_list: "Science Fiction,Fiction,Humor,Fantasy,Classics",
        image_url: "https://images.gr-assets.com/books/1388282444l/386162.jpg",
        Quote1: "Wit beyond measure is man's greatest treasure.'",
        Quote2: "'Indifference and neglect often do much more damage than outright dislike.'",
        Quote3: "'Things we lose have a way of coming back to us in the end, if not always in the way we expect.'"
        },
  ]);

  const handleAddFavorite = (book) => {
    setFavoriteBooks([...favoriteBooks, book]);
  };

  const handleRemoveFavorite = (book) => {
    setFavoriteBooks(
      favoriteBooks.filter((item) => item.id !== book.title)
    );
  };
  
  const value = { handleAddFavorite, handleRemoveFavorite, favoriteBooks };
  return (
    <FavoriteBookContext.Provider value={value}>
      {props.children}
    </FavoriteBookContext.Provider>
  );
};