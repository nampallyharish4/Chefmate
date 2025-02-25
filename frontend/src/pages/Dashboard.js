import { useState, useEffect } from "react";
import { Search, Star } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg"; // Add an image in src/assets/

const UserDashboard = () => {
  const [user, setUser] = useState({ username: "" });
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")) || { username: "Guest" };
    setUser(storedUser);

    // Dummy data for recommended recipes
    setRecipes([
      { id: 1, name: "Spaghetti Carbonara", rating: 4.5, img: "/images/spaghetti.jpg" },
      { id: 2, name: "Grilled Chicken Salad", rating: 4.7, img: "/images/salad.jpg" },
      { id: 3, name: "Vegan Buddha Bowl", rating: 4.6, img: "/images/buddha-bowl.jpg" },
    ]);
  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 w-full">
        {/* Hero Section */}
        <div
          className="relative h-64 bg-cover bg-center text-white flex items-center justify-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <motion.h1
            className="text-4xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Welcome, {user.username}!
          </motion.h1>
        </div>

        {/* Search Bar */}
        <div className="m-6 flex items-center bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <Search className="text-gray-500 mr-3" />
          <input type="text" placeholder="Search recipes..." className="w-full p-2 focus:outline-none" />
        </div>

        {/* Recommended Recipes */}
        <h2 className="text-2xl font-semibold mb-4 ml-6">Recommended Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {recipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <img src={recipe.img} alt={recipe.name} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-lg font-bold mt-2">{recipe.name}</h3>
              <p className="flex items-center text-yellow-500 mt-1">
                <Star className="mr-1" /> {recipe.rating}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
