import React, { useState } from "react";
import logo from "../../images/logo.svg";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ cart, getPizzas }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
    getPizzas(search);
  }

  function handleClick() {
    getPizzas(search);
    navigate("/searched");
  }
  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <Box
      component="header"
      className="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
      }}
    >
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Box className="header-form">
        <input
          onClick={handleClick}
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="Поиск..."
        />
        <button>
          <SearchIcon sx={{ color: "white" }} />
        </button>
      </Box>
      <Box className="header-cart">
        <p>{totalPrice}</p>
        <Box className="header-cart-line"></Box>
        <p onClick={() => navigate("/cart")}>
          <ShoppingCartOutlinedIcon />
          {cart.length}
        </p>
      </Box>
    </Box>
  );
}
