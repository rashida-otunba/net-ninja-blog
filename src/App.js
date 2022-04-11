import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  // all valid JS can be written after the function and before the return statement
  // react converts all data types to strings; Booleans and objects cannot be used

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
