import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import "../../public/styles.css";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Note />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default App;
