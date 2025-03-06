import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Auth } from "./components/auth";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./config/firebase";

function App() {
  const [movieList, setMovieList] = useState([]);

  // New Movie State
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newMovieReleaseDate, setNewMovieReleaseDate] = useState(0);
  const [newMovieReceivedAnOscar, setNewMovieReceivedAnOscar] = useState(false);

  const moviesCollectionRef = collection(db, "movies");

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
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    getMovieList();
  }, []);

  const onSubmitMovie = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        title: newMovieTitle,
        releaseDate: newMovieReleaseDate,
        receivedAnOscar: newMovieReceivedAnOscar,
      });
      getMovieList();
      setNewMovieTitle("");
      setNewMovieReleaseDate(0);
      setNewMovieReceivedAnOscar(false);
    } catch (error) {
      console.error(error);
    }
  };

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

      <div>
        <input
          type="text"
          placeholder="movie title...."
          onChange={(e) => setNewMovieTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="release date...."
          onChange={(e) => setNewMovieReleaseDate(Number(e.target.value))}
        />
        <div>
          <input
            type="checkbox"
            checked={newMovieReceivedAnOscar}
            onChange={(e) => setNewMovieReceivedAnOscar(e.target.checked)}
          />
          <label htmlFor="receivedanoscar">ReceivedAnOscar</label>
        </div>
        <button onClick={onSubmitMovie}>Submit Movie</button>
      </div>
    </div>
  );
}

export default App;
