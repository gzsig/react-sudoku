import "./App.css";
import { Sudoku } from "./components";
import { Header } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Sudoku />
    </div>
  );
}

export default App;
