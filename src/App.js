import React, { useState, useEffect } from "react";
import "./App.css";
//components
import NavBar from "./components/NavBar/NavBar";
// import ListProducts from "./components/ListProducts/ListProducts";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import ItemDetail from "./components/ItemDetail/ItemDetail";
import AppRouter from "./AppRouter/AppRouter";

function App() {
  const [fixedScroll, setFixedsScroll] = useState(false);
  // const [pokemons, setPokemons] = useState([]);
  // const urlPokeApi = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";
  useEffect(() => {
    function onScrollWindow() {
      if (window.scrollY > 161) {
        setFixedsScroll(true);
      } else {
        setFixedsScroll(false);
      }
    }

    // getPokemons();

    window.addEventListener("scroll", onScrollWindow);
  }, []);

  // const getPokemons = () => {
  //   fetch(urlPokeApi)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("obtener data", data.results);
  //       setPokemons(data.results);
  //     });
  // };

  return (
    //JSX
    <div className="App">
      <NavBar fixed={fixedScroll} />
      {/* <AppRouter /> */}
      {/* <ListProducts /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
