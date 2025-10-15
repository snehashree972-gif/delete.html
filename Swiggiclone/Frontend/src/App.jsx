import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
import "./App.css";
function App() {
  const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    <Router>
      <div className="App-nav">
        

        <nav className="app-nav">
          <h1>Swiggy Clone</h1>
          {!isLoggedin ? (
            <>
            <div className="auth-details">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
              </div>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <button
                onClick={() => {
                  setIsLoggedin(false);
                }}
              >
                Logout
              </button>
            </>
          )}
        </nav>
        <Routes>
          <Route path="/" element={isLoggedin ? <HomePage /> : <Login/>} />
          <Route path="/login" element={<Login setIsLoggedin={setIsLoggedin} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;