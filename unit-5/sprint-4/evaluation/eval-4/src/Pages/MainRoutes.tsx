import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddProduct } from "./AddProduct";
import { HomePage } from "./HomePage";

export const MainRoutes = () => {
  return <Routes>
    <Route path="/" element={<HomePage/>} ></Route>
    <Route path="/add-product" element={<AddProduct/>} ></Route>
  </Routes>;
};
