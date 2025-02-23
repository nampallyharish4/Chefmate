import { FaSearch, FaHeart, FaUtensils } from "react-icons/fa";
import Button from "../components/ui/Button"; // Using your custom Button
import { Card, CardContent } from "../components/ui/Card";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const Home = () => {
  return (
    <div className="min-vh-100 bg-light">
      {/* Hero Section */}
      <div className="container text-center d-flex flex-column align-items-center justify-content-center py-5">
        <h1 className="display-4 fw-bold text-dark">
          Discover Delicious Recipes with <span className="text-warning">ChefMate</span>
        </h1>
        <p className="lead text-muted">
          Find, Cook, and Share Amazing Recipes!
        </p>
        <div className="mt-3">
        <Link to="/register">
          <Button className="btn btn-primary btn-lg mt-3">Get Started</Button>
        </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5 bg-white text-dark rounded-top">
        <h2 className="text-center fw-bold mb-4">Why Choose ChefMate?</h2>
        <div className="row g-5">
          <div className="col-md-4">
            <Card className="text-center p-3 shadow">
              <CardContent>
                <FaSearch className="text-primary display-4 mb-3" />
                <h3 className="h5 fw-bold">Search Recipes</h3>
                <p className="text-muted">Find recipes based on ingredients you have.</p>
              </CardContent>
            </Card>
          </div>

          <div className="col-md-4">
            <Card className="text-center p-3 shadow">
              <CardContent>
                <FaHeart className="text-danger display-4 mb-3" />
                <h3 className="h5 fw-bold">Save Favorites</h3>
                <p className="text-muted">Bookmark recipes you love for easy access.</p>
              </CardContent>
            </Card>
          </div>

          <div className="col-md-4">
            <Card className="text-center p-3 shadow">
              <CardContent>
                <FaUtensils className="text-success display-4 mb-3" />
                <h3 className="h5 fw-bold">AI-Powered Cooking</h3>
                <p className="text-muted">Get smart recipe suggestions based on your preferences.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
