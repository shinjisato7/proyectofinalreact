import React, { useState, useEffect } from "react";
import "./App.css";
//components
import NavBar from "./components/NavBar/NavBar";
import ListProducts from "./components/ListProducts/ListProducts";

function App() {
  const [fixedScroll, setFixedsScroll] = useState(false);

  useEffect(() => {
    function onScrollWindow() {
      if (window.scrollY > 161) {
        setFixedsScroll(true);
      } else {
        setFixedsScroll(false);
      }
    }

    window.addEventListener("scroll", onScrollWindow);
  }, []);

  return (
    //JSX
    <div className="App">
      <NavBar fixed={fixedScroll} />
      <ListProducts />
    </div>
  );
}

export default App;
