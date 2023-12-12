import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import "./App.css"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";

function App() {
  const { user } = useContext(AuthContext);
  // const navigate = useNavigate();

  return (
    <Router>
    <Routes>
    
    <Route
        path="/messenger"
        element={user ? <Messenger/> : <Login />}
      />
      <Route path="/" element={user ? <Home /> :<Login/>} />
      <Route
        path="/login"
        element={user ? <Home/>: <Login />}
      />
     
      
    </Routes>
    </Router>
  );
}

export default App;
