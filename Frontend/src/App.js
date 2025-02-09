import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { UserProvider } from "./context/UserContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ErrorBoundary from "./components/ErrorBoundary";

import Header from "./components/header";
import Home from "./components/hero";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Login from "./components/login";
import Logout from "./components/logout";
import Register from "./components/register";
import CollegePredictor from "./components/CollegePredictor";
import RankPredictor from "./components/RankPredictor";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

function App() {
  return (
    <Router>
      <AuthProvider>
        <UserProvider>
          <ErrorBoundary>
            <header id="header">
              <Header />
            </header>
            <div className="App" style={{ color: "white" }}>
              <main>
                <Routes>
                  {/* Redirect root URL to Login */}
                  <Route path="/" element={<Navigate to="/login" />} />

                  {/* Public Routes */}
                  <Route element={<Login />} path="/login"></Route>
                  <Route element={<Register />} path="/register"></Route>

                  {/* Protected Routes - Only accessible if logged in */}
                  <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
                  <Route path="/contact" element={<ProtectedRoute element={<Contact />} />} />
                  <Route path="/collegepredictor" element={<ProtectedRoute element={<CollegePredictor />} />} />
                  <Route path="/rankpredictor" element={<ProtectedRoute element={<RankPredictor />} />} />
                  <Route path="/logout" element={<ProtectedRoute element={<Logout />} />} />
                </Routes>
              </main>
            </div>
            <ToastContainer />
            <Footer />
          </ErrorBoundary>
        </UserProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
