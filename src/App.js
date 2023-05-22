import * as React from "react";
import { Routes, Route } from "react-router-dom";
import PagesLayout from "./PagesLayout";
import AboutView from "./AboutView";
import HomeView from "./HomeView";
import ErrorView from "./ErrorView";
import ProductDetailsView from "./ProductDetailsView";

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
