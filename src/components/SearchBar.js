import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ setBooks, addToHistory }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    try {
      const response = await axios.get(API_URL);
      const books = response.data.items || [];
      setBooks(books);
      books.forEach((book) => addToHistory(book.volumeInfo.title));
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
