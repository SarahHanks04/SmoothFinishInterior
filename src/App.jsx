import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Auth } from "./components/auth";

function App() {
  return (
    <div>
      <Navbar />
      <Auth />
    </div>
  );
}

export default App;
