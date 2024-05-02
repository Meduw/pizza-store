import React from "react";
import logo from "../../images/logo.svg";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

export default function Header() {
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
        <input type="text" placeholder="Поиск..." />
        <button>
          <SearchIcon sx={{ color: "white" }} />
        </button>
      </Box>
      <Box className="header-cart">
        <p>520 com</p>
        <Box className="header-cart-line"></Box>
        <p>
          <ShoppingCartOutlinedIcon />3
        </p>
      </Box>
    </Box>
  );
}
