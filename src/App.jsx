import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ContactForm from "./components/ContactForm.jsx";

import AdminPanel from "./admin/AdminPanel.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Portfolio from "./pages/Portfolio.jsx";




// Generic auth check
const isAuthenticated = () => !!localStorage.getItem("token");

// Extra check: visited dashboard
const hasVisitedDashboard = () =>
  localStorage.getItem("visitedDashboard") === "true";

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const PortfolioRoute = ({ children }) => {
  return isAuthenticated() && hasVisitedDashboard() ? (
    children
  ) : (
    <Navigate to="/dashboard" />
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Portfolio homepage */}
        <Route
          path="/"
          element={
            <PortfolioRoute>
              <Portfolio />
            </PortfolioRoute>
          }
        />

        {/* Auth Pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Portfolio (only after dashboard) */}
        <Route
          path="/portfolio"
          element={
            <PortfolioRoute>
              <Portfolio />
            </PortfolioRoute>
          }
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
