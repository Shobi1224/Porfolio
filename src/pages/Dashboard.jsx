import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../auth.css";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("visitedDashboard", "true");
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("visitedDashboard");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h2>Welcome to Dashboard</h2>
        <p>You are logged in successfully 🎉</p>

        <div className="dashboard-actions">
          <Link to="/portfolio">Go to Portfolio</Link>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
