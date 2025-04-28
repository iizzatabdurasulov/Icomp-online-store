import React, { useContext } from "react";
import { Context } from "../../hooks/Context";
import BasketItem from "../BasketItem/BasketItem";
import { Col, Container, Row } from "react-bootstrap";
import { saleProduct } from "../../constants/Device";
import SaleProductItem from "../SaleProductItem/SaleProductItem";
import "./BasketCard.scss";
import { useNavigate } from "react-router";
export default function BasketCard() {
  const { dbBasket, showBasket, setShowBasket } = useContext(Context);
  const totalPrice = dbBasket.reduce(
    (sum, item) => sum + item.price * item.countProduct,
    0
  );
  const navigate = useNavigate();
  const handleContinueBuying = () => {
    setShowBasket(false);

    navigate(`/`);
  };


  const handleNavigateToPlace = () => {
    setShowBasket(false);
    navigate(`/placeOrder`);
  };
  return (
    <div className="basketCard">
      <Container>
        <Row>
          <Col lg="12">
            <div className="basketItems">
              <h4>Корзина</h4>
              {dbBasket.length === 0 && (
                <Col lg="12" className="emptyBasket">
                  <h3>Корзина пуста</h3>
                </Col>
              )}
              {dbBasket.map((element, value) => {
                return <BasketItem key={value} data={element} />;
              })}
            </div>
            {dbBasket.length > 0 && (
              <div className="basketCardBottom">
              <button onClick={handleContinueBuying} className="continue">
                Продолжить покупки
              </button>
              <div className="totalPriceAndPlaceOrder">
                <h5>
                  {totalPrice} <span>грн</span>
                </h5>
                <button
                  onClick={handleNavigateToPlace}
                  className="catalogButton"
                >
                  ОФОРМИТЬ ЗАКАЗ
                </button>
              </div>
            </div>
            )}
            
          </Col>

          <Col lg="12">
            <h2 className="title">С этим товаром покупают</h2>
          </Col>
          {saleProduct.slice(0, 4).map((element, value) => {
            return (
              <Col key={value} lg="3" xs="6">
                <SaleProductItem product={element} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
