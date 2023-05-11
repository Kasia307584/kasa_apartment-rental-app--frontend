import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./About";
import Home from "./Home";
import Error from "./Error";
import Details from "./Details";

export default function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="details" element={<Details />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}
