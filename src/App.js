import React, { memo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ViewCategory from "./pages/ViewCategory";
import DetailProduct from "./pages/DetailProduct";
import ViewSearch from "./pages/ViewSearch";
import Pay from "./pages/Pay";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/category/0" />} />
        <Route path="/category/:id" element={<ViewCategory />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/view-search/:query" element={<ViewSearch />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
