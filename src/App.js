import * as React from "react";
import { Routes, Route } from "react-router-dom";
import PagesLayout from "./pages/PagesLayout";
import AboutView from "./pages/AboutView";
import HomeView from "./pages/HomeView";
import ErrorView from "./pages/ErrorView";
import ProductDetailsView from "./pages/ProductDetailsView";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PagesLayout />}>
        <Route index element={<HomeView />} />
        <Route path="about" element={<AboutView />} />
        <Route path="details/:productId" element={<ProductDetailsView />} />
        <Route path="*" element={<ErrorView />} />
      </Route>
    </Routes>
  );
}
