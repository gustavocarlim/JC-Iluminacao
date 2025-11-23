import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppShell, ScrollToTop } from "./components/Layout";
import Hoome from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppShell>
        <Routes>
          <Route path="/" element={<Hoome />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/contacts" element={<ContactPage />} />
        </Routes>
      </AppShell>
    </Router>
  );
}