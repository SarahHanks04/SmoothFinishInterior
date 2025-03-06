import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Auth } from "./components/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";

function App() {
  const [movieList, setMovieList] = useState([]);

  const moviesCollectionRef = collection(db, "movies");

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
        console.log(data);
        setMovieList(filteredData);
        // console.log(setMovieList)
      } catch (error) {
        console.error(error);
      }
    };

    getMovieList();
  }, []);

  return (
    <div>
      <Navbar />
      <Auth />

      <div>
        <h1>Movie List</h1>
        {movieList.map((movie) => (
          <div key={movie.id}>
            <h2 style={{ color: movie.receivedAnOscar ? "green" : "red" }}>
              {movie.title}
            </h2>
            <p>Date: {movie.releaseDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
