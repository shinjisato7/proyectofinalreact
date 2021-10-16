import "./App.css";
//components
import AppRouter from "./AppRouter/AppRouter";
import CartContext from "./context/CartContext";

function App() {
  return (
    //JSX
    <div className="App">
      <CartContext.Provider value={[]}>
        <AppRouter />
      </CartContext.Provider>
    </div>
  );
}

export default App;
