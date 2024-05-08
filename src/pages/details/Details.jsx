import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  Navigate,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

export default function Details({
  oneProduct,
  deletePizza,
  getPizzas,
  getOneProduct,
  toLocalStorage,
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
    <div className="details">
      <Box className="details-inner">
        <img width={400} src={oneProduct?.url} alt={oneProduct?.title} />
        <Box className="details-inner__child">
          <Typography>{oneProduct?.title}</Typography>
          <Typography>{oneProduct?.info}</Typography>
          <Typography>{oneProduct?.price}</Typography>

          <Button
            onClick={() =>
              toLocalStorage({
                ...oneProduct,
                quantity: 1,
                totalPrice: oneProduct.price,
              })
            }
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
          <Button
            onClick={() => navigate(`/edit-form/${params.id}`)}
            variant="contained"
          >
            Редактировать продукт
          </Button>
        </Box>
      </Box>
    </div>
  );
}
