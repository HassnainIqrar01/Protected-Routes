import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Protectedroutes from "./components/Protectedroutes";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/login"> Login </Link>
      </nav>

      <Routes>
      <Route path="/login" element={<Login />} />

<Route element={<Protectedroutes/>}>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={()=> <About authurized={false}/>} />
</Route>
       
        
      </Routes>
    </Router>
  );
}

export default App;
