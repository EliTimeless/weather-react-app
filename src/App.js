import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="col m-3 p-4">
          <Weather />
        </div>
        <div className="col"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
