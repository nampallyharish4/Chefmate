import { motion } from "framer-motion";
import { Home, Bookmark, User, LogOut, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <motion.div
      animate={{ width: isOpen ? "16rem" : "4rem" }}
      className="h-screen bg-gradient-to-b from-orange-500 to-red-600 text-white fixed p-4 flex flex-col shadow-lg"
    >
      {/* Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="mb-6">
        <Menu className="text-white" />
      </button>

      {/* Navigation Links */}
      <ul className="space-y-6 text-lg">
        <li>
          <Link to="/dashboard" className="flex items-center space-x-3 hover:opacity-80">
            <Home /> {isOpen && <span>Dashboard</span>}
          </Link>
        </li>
        <li>
          <Link to="/saved-recipes" className="flex items-center space-x-3 hover:opacity-80">
            <Bookmark /> {isOpen && <span>Saved Recipes</span>}
          </Link>
        </li>
        <li>
          <Link to="/profile" className="flex items-center space-x-3 hover:opacity-80">
            <User /> {isOpen && <span>Profile</span>}
          </Link>
        </li>
      </ul>

      {/* Logout Button */}
      <button onClick={handleLogout} className="mt-auto flex items-center space-x-3 text-white hover:opacity-80">
        <LogOut /> {isOpen && <span>Logout</span>}
      </button>
    </motion.div>
  );
};

export default Sidebar;
