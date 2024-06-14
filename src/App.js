import './App.css';
import HeaderCard from "./components/HeaderCard/HeaderCard";
import Discover from "./components/Discover/Discover";
import Recommended from "./components/Recommended/Recommended";
function App() {
  return (
    <div className="App">
    <HeaderCard/>
      <Discover/>
      <Recommended/>
    </div>
  );
}

export default App;
