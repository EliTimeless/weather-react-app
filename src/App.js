import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from weather!</h1>
        <Weather city="Praha" />
      </header>
    </div>
  );
}

export default App;
