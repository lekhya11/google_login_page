import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home"
import Login from "./Login/loginPage"
import "./App.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
