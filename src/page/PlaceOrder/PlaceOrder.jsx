import React, { useContext } from "react";
import { Context } from "../../hooks/Context";
import { Container, Row, Col } from "react-bootstrap";
import "./PlaceOrder.scss";
import { Link } from "react-router";

export default function PlaceOrder() {
  const { dbBasket } = useContext(Context);

  const totalProducts = dbBasket.reduce(
    (sum, item) => sum + item.countProduct,
    0
  );
  const totalPrice = dbBasket.reduce(
    (sum, item) => sum + item.price * item.countProduct,
    0
  );

  return (
    <div className="placeOrder">
      <Container>
        <h2 className="title">Оформление заказа</h2>

        <Row>
          <Col lg="7">
            {dbBasket.length === 0 ? (
              <h3>Корзина пуста</h3>
            ) : (
              <h6>Ваш заказ</h6>
            )}

            {dbBasket.map((item, index) => (
              <Col lg="12" key={index}>
                <div className="orderItem">
                  <div className="orderNameImg">
                    <img src={item.img} alt={item.productName} />
                    <h3>{item.productName}</h3>
                  </div>
                  <div className="orderItemInfo">
                    <h4>
                      Количество: <span>{item.countProduct}</span>
                    </h4>
                    <h4>
                      Цена за шт.: <span>{item.price} грн</span>
                    </h4>
                    <h4>
                      Сумма: <span>{item.price * item.countProduct} грн</span>
                    </h4>
                    <button>Редактировать</button>
                  </div>
                </div>
              </Col>
            ))}
          </Col>

          {dbBasket.length > 0 && (
            <Col lg="5">
              <div className="total">
                <h2 className="title">Итого</h2>
                <ul>
                  <li>
                    <p>{totalProducts} товара(ов) на сумму:</p>
                    <span>{totalPrice} грн</span>
                  </li>
                  <li>
                    <p>Стоимость доставки:</p>
                    <span>Бесплатно</span>
                  </li>
                  <li>
                    <p>Итого к оплате:</p>
                    <span className="totalCost">{totalPrice} грн</span>
                  </li>
                </ul>
                <button className="catalogButton">ПОДТВЕРДИТЬ ЗАКАЗ</button>
                <p>
                  Подтверждая заказ, я принимаю условия{" "}
                  <Link>пользовательского соглашения</Link>
                </p>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}
