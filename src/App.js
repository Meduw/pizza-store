import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/headers/Header";
import HomePages from "./pages/homePages/HomePages";
import AddForm from "./pages/addForm/AddForm";
import axios from "axios";

export default function App() {
  const API = "http://localhost:8000/pizzas";
  function createPizza(pizza) {
    axios.post(API, pizza);
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route
          path="/add-form"
          element={<AddForm createPizza={createPizza} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
