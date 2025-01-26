import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { ActiveAuctions } from "./pages/ActiveAuctions";
import { Help } from "./pages/Help";
import { ProductAuction } from "./ProductAuction";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { UserSettings } from "./pages/UserSettings";

export function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/auctions" element={<ActiveAuctions />} />
            <Route path="/help" element={<Help />} />
            <Route path="/auction/:id" element={<ProductAuction />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/settings" element={<UserSettings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}