import logo from "./logo.svg";
import "./App.css";
import Navbar from "../src/navbar/index";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "../src/Home/Home";
import Bin from "../src/Bin/Bin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deletedActivities" element={<Bin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
