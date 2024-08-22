import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./pages/Navbar";

function ReactRouterDom() {
  const [username, setUsername] = useState("Sonam");

  return (
    <div className="router">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home username={username} />} />
          <Route path="/profile" element={<Profile username={username} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<h3>Page Not Found</h3>} />
        </Routes>
      </Router>
    </div>
  );
}

export default ReactRouterDom;
