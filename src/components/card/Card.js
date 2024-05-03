import React, { useState } from "react";
import pizzaImg from "../../images/image 5.png";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useNavigate } from "react-router-dom";

export default function Card({ product }) {
  const navigate = useNavigate();
  const [testo, setTesto] = useState("тонкое");
  const [size, setSize] = useState(25);

  return (
    <div className="card">
      <img
        onClick={() => navigate(`/details/${product.id}`)}
        src={product.url}
        alt={product.title}
      />
      <p>{product.title}</p>
      <div className="card-select">
        <div className="card-select-inner">
          <button
            onClick={() => setTesto("тонкое")}
            className={testo === "тонкое" ? "btn-active" : null}
          >
            тонкое
          </button>
          <button
            onClick={() => setTesto("традиционное")}
            className={testo === "традиционное" ? "btn-active" : null}
          >
            традиционное
          </button>
        </div>
        <div className="card-select-inner">
          <button
            onClick={() => setSize(25)}
            className={size === 25 ? "btn-active" : null}
          >
            25 см
          </button>
          <button
            onClick={() => setSize(30)}
            className={size === 30 ? "btn-active" : null}
          >
            30 см
          </button>
          <button
            onClick={() => setSize(40)}
            className={size === 40 ? "btn-active" : null}
          >
            40 см
          </button>
        </div>
      </div>
      <div className="card-end">
        <p>{product.price} сом</p>
        <button>
          <AddOutlinedIcon sx={{ color: "white" }} /> Добавить
        </button>
      </div>
    </div>
  );
}
