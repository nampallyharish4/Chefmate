import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar"; // If you have a Navbar component
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard"; // Import Dashboard component
import ProtectedRoute from "./utils/ProtectedRoute"; // Import ProtectedRoute component 

function App() {
  return (
    <Router>
      {/* Include Navbar if you have one */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="/register" element={<><Navbar /><Register /></>} />
          <Route path="/login" element={<><Navbar /><Login /></>} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Add Dashboard Route */}
          <Route path="/protected" element={<ProtectedRoute />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

