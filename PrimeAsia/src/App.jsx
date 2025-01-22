import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs/Blogs";
import News from "./pages/News/News";

import "./App.css";

const GoToAbout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const address = document.getElementById(location.hash.slice(1));

      if (address) {
        address.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <GoToAbout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
