import React, { useEffect, useState } from "react";
import "./SaleProduct.scss";
import { Col, Container, Row } from "react-bootstrap";

import { saleProduct } from "../../constants/Device";
import "./SaleProduct.scss";
import SaleProductItem from "../SaleProductItem/SaleProductItem";
export default function SaleProduct() {
  const [viewAll, setViewAll] = useState(4);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1199);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1199;
      setIsMobile(mobile);
      setViewAll(mobile ? 4 : saleProduct.length); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleViewAll = () => {
    if (viewAll === 4) {
      setViewAll(saleProduct.length);
    } else {
      setViewAll(4);
    }
  };

  return (
    <div className="saleProduct">
      <Container>
        <Row>
          <h2 className="title">Топ продаж</h2>
          {saleProduct.slice(0, viewAll).map((product, index) => {
            return (
              <Col lg="2" xs="6" key={index}>
                <SaleProductItem product={product} />
              </Col>
            );
          })}

          {isMobile && (
            <Col lg="12" style={{ textAlign: "center" }}>
              <button onClick={handleViewAll} className="viewAll">
              {viewAll === 4 ? "Показать все" : "Скрыть"}
              </button>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}
