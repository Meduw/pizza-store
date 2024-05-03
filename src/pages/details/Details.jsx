import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function Details({
  oneProduct,
  deletePizza,
  getPizzas,
  getOneProduct,
}) {
  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  const handleDelete = () => {
    deletePizza(params.id);
    navigate("/");
  };

  return (
    <div>
      <Box>
        <img width={400} src={oneProduct?.url} alt={oneProduct?.title} />
        <Box>
          <Typography>{oneProduct?.title}</Typography>
          <Typography>{oneProduct?.info}</Typography>
          <Button
            variant="contained"
            sx={{ background: "#FF5F1E", color: "white" }}
          >
            В корзину
          </Button>
          <Button
            onClick={handleDelete}
            variant="contained"
            sx={{ background: "#FF0505", color: "white" }}
          >
            Удалить
          </Button>
          <Button variant="contained">Редактировать продукт</Button>
        </Box>
      </Box>
    </div>
  );
}
