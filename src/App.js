import './App.css';
import Nav from './navbar/Nav';
import Home from "./secondsection/home.jsx";
import About from './thirdsection/About';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
    </div>
  );
}

export default App;
