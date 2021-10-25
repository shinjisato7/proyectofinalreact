import "./App.css";
//components
import AppRouter from "./AppRouter/AppRouter";
import WrapperContext from "./context/WrapperContext";

function App() {
  return (
    //JSX
    <div className="App">
      <WrapperContext>
        <AppRouter />
      </WrapperContext>
    </div>
  );
}

export default App;
