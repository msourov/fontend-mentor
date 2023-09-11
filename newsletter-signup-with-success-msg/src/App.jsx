import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Subscribed from "./components/Subscribed";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/success" element={<Subscribed />} />
      </Routes>
    </div>
  );
}

export default App;
