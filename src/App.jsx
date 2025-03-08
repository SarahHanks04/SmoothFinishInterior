import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Auth } from "./components/auth";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./config/firebase";

function App() {
  const [movieList, setMovieList] = useState([]);

  // New Movie State
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newMovieReleaseDate, setNewMovieReleaseDate] = useState(0);
  const [newMovieReceivedAnOscar, setNewMovieReceivedAnOscar] = useState(false);

  // Update Title State
  const [updatedTitle, setUpdatedTitle] = useState("");

  const moviesCollectionRef = collection(db, "movies");

  // Get Movie List
  const getMovieList = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  // Add/create and Submit Movie
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

  // Delete Movie
  const onDeleteMovie = async (id) => {
    const movieDoc = doc(db, "movies", id);
    try {
      await deleteDoc(movieDoc);
      getMovieList();
    } catch (error) {
      console.error(error);
    }
  };

  // Update Movie
  const UpdateMovie = async (id) => {
    const movieDoc = doc(db, "movies", id);
    try {
      await updateDoc(movieDoc, { title: updatedTitle });
      getMovieList();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* <Navbar /> */}
      <Auth />

      {/* Movie List Section */}
      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-3xl font-bold text-center mb-6">Movie List</h1>
        <div className="space-y-4">
          {movieList.map((movie) => (
            <div
              key={movie.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2
                className={`text-2xl font-semibold ${
                  movie.receivedAnOscar ? "text-green-600" : "text-red-600"
                }`}
              >
                {movie.title}
              </h2>
              <p className="text-gray-600 mt-2">
                Release Date: {movie.releaseDate}
              </p>

              {/* Update and Delete Buttons */}
              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="New title..."
                  onChange={(e) => setUpdatedTitle(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => UpdateMovie(movie.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Update Title
                </button>
                <button
                  onClick={() => onDeleteMovie(movie.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                >
                  Delete Movie
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Movie Section */}
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add a New Movie</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Movie title..."
            value={newMovieTitle}
            onChange={(e) => setNewMovieTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Release date..."
            value={newMovieReleaseDate}
            onChange={(e) => setNewMovieReleaseDate(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={newMovieReceivedAnOscar}
              onChange={(e) => setNewMovieReceivedAnOscar(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="receivedanoscar" className="text-gray-700">
              Received an Oscar
            </label>
          </div>
          <button
            onClick={onSubmitMovie}
            className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
          >
            Submit Movie
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
