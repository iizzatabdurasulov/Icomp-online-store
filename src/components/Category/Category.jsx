import React from "react";
import "./Category.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { deviceData } from "../../constants/Device";

export default function Category() {
  return (
    <div>
      <Navbar />
      <div className="category">
        <Container>
          <Row>
            <Col>
              <h2 className="title">Компьютерные комплектующие</h2>
            </Col>
            {deviceData.map((element, value) => {
              return (
                <Col lg="2" key={value}>
                  <div className="categoryItem">
                    <img src={element?.img} alt={element?.productName} />
                    <h3>{element?.productName}</h3>
                  </div>
                </Col>
              );
            })}
            <Col lg="12">
              <Container>
                <Row>
                  <h2 className="title">Популярные товары</h2>
                  {saleProduct.slice(0, 6).map((product, index) => {
                    return (
                      <Col lg="2" xs="6" key={index}>
                        <SaleProductItem product={product} />
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
