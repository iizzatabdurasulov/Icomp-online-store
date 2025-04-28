import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { saleProduct } from "../../constants/Device";
import SaleProductItem from "../SaleProductItem/SaleProductItem";
import "./GameZone.scss";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import keyboard from "../../assets/img/keyboard.png";
export default function GameZone() {
  return (
    <div className="gameZone">
      <Container>
        <Row>
          <h1>Game Zone</h1>
          {saleProduct.slice(0, 6).map((product, index) => {
            return (
              <Col key={index}>
                <SaleProductItem product={product} />
              </Col>
            );
          })}
          <Link>
            Смотреть все товары <FaArrowRight />{" "}
          </Link>

          <h2 className="title">Категории для геймеров</h2>

          <Col lg="2" xs="6">
            <div className="categoryGamer">
              <img src={keyboard} alt="" />
              <h3>Клавиатуры</h3>
            </div>
          </Col>
          <Col lg="2" xs="6">
            <div className="categoryGamer">
              <img src={keyboard} alt="" />
              <h3>Клавиатуры</h3>
            </div>
          </Col>
          <Col lg="2" xs="6">
            <div className="categoryGamer">
              <img src={keyboard} alt="" />
              <h3>Клавиатуры</h3>
            </div>
          </Col>
          <Col lg="2" xs="6">
            <div className="categoryGamer">
              <img src={keyboard} alt="" />
              <h3>Клавиатуры</h3>
            </div>
          </Col>
          <Col lg="2" xs="6">
            <div className="categoryGamer">
              <img src={keyboard} alt="" />
              <h3>Клавиатуры</h3>
            </div>
          </Col>
          <Col lg="2" xs="6">
            <div className="categoryGamer">
              <img src={keyboard} alt="" />
              <h3>Клавиатуры</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
