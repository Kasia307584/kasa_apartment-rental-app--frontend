import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./About";
import Home from "./Home";
import Error from "./Error";
import ProductDetailsView from "./ProductDetailsView";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="details/:productId" element={<ProductDetailsView />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}
