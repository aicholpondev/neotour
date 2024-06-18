import './App.css';
import HeaderCard from "./components/HeaderCard/HeaderCard";
import Discover from "./components/Discover/Discover";
import Recommended from "./components/Recommended/Recommended";
import Details from "./pages/Details/Details";

function App() {
  return (
    <div className="App">
    <HeaderCard/>
      <Discover/>
      <Recommended/>
      <Details/>
    </div>
  );
}

export default App;
