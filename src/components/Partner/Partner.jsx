import React from "react";
import hp from "../../assets/img/HP_New_Logo_2D 1.svg";
import acer from "../../assets/img/1200px-Acer-Logo_2001.svg";
import lenovo from "../../assets/img/Branding_lenovo-logo_lenovologoposred_low_res.svg";
import samsung from "../../assets/img/Samsung_Logo.svg";
import sony from "../../assets/img/Sony-Logo.svg";
import Marquee from "react-fast-marquee";
import { Col, Container, Row } from "react-bootstrap";
import './Partner.scss'
export default function Partner() {
  return (
    <div className="partner">
      <Container>
        <Row>
        <Col>
        <h2 className="title">Партнеры</h2>
        <Marquee autoFill={true}>
          <img src={hp} alt="" />
          <img src={acer} alt="" />
          <img src={lenovo} alt="" />
          <img src={sony} alt="" />
          <img src={samsung} alt="" />
        </Marquee>
        </Col>
        </Row>
      </Container>
    </div>
  );
}
