import logo from './logo.svg';
import './App.css';
import { Alphaaa } from "./Alphaaa";
import img from './scb_logo.png'

function App() {
  return (
    <div className="App">
      <div className="head11">
        <img src={img} alt="logo" />
        <h1>Standard Chartered Bank</h1>
      </div>
      <Alphaaa />
    </div>
  );
}

export default App;
