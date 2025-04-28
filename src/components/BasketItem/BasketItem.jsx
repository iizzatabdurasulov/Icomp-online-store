import React, { useContext, useEffect, useState } from "react";
import "./BasketItem.scss";
import { Context } from "../../hooks/Context";
import { FaTrash } from "react-icons/fa";
import { saleProduct } from "../../constants/Device";
import { Col, Container, Row } from "react-bootstrap";
import SaleProductItem from "../SaleProductItem/SaleProductItem";

export default function BasketItem({ data }) {
  const { dbBasket, setDbBasket } = useContext(Context);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = data.price * data.countProduct;
    setTotalPrice(total);
  }, [data.countProduct, data.price]);

  const handleDelete = () => {
    setDbBasket((prev) => prev.filter((item) => item.id !== data.id));
  };

  const handleDecrease = () => {
    setDbBasket((prev) =>
      prev.map((item) =>
        item.id === data.id
          ? {
              ...item,
              countProduct: item.countProduct > 1 ? item.countProduct - 1 : 1,
            }
          : item
      )
    );
  };

  const handleIncrease = () => {
    setDbBasket((prev) =>
      prev.map((item) =>
        item.id === data.id
          ? { ...item, countProduct: item.countProduct + 1 }
          : item
      )
    );
  };

  return (
    <div className="basketItem">
      <Container>
        <Row>
          <Col lg="12">
            <div className="basketBody">
              <div className="infoProduct">
                <img src={data?.img} alt={data?.productName} />
                <h2>{data?.productName}</h2>
              </div>
              <ul>
                <li onClick={handleDecrease}>-</li>
                <span>{data?.countProduct}</span>
                <li onClick={handleIncrease}>+</li>
              </ul>
              <h3>
                {totalPrice} <span>грн</span>
              </h3>
              <button onClick={handleDelete}>
                {" "}
                <FaTrash />{" "}
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
