import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <h1>Gallery</h1>
        <div className="row">
          {Array.apply(null, { length: 9 }).map(() => {
            return <Card />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
