import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import "./HeaderBanner.scss";
import heroBanner from "../../assets/img/Hero.png";
import Slider from "react-slick";
import { deviceData } from "../../constants/Device";
import spanner from "../../assets/img/spanner.svg";
import guarant from "../../assets/img/guarant.svg";
import price from "../../assets/img/price.svg";
import hands from "../../assets/img/payments.svg";
import delivery from "../../assets/img/delivery.svg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Category from "../Category/Category";

export default function HeaderBanner() {
  const [isHiddenUlOpen, setIsHiddenUlOpen] = useState(false);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  var mediaSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoPlay: true,
  };

  return (
    <header className="headerBanner">
      <Container>
        <Row className="justify-content-between">
          <Col
            lg="4"
            className={isHiddenUlOpen ? "openUlActive category" : "category"}
          >
            <ul>
              {deviceData.map((element, item) => (
                <li key={item}>
                  <Link
                    to={element?.slug}
                    onClick={() => item === 0 && <Category />}
                  >
                    <span>
                      {element?.leftIcons}
                      {element?.deviceName}
                    </span>
                    {element?.rightIcons}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className={isHiddenUlOpen ? "hiddenUl open" : "hiddenUl"}>
              {deviceData.map(
                ({ id, leftIcons, deviceName, slug, rightIcons }) => (
                  <li key={id}>
                    <Link to={slug}>
                      <span>
                        {leftIcons}
                        {deviceName}
                      </span>
                      {rightIcons}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <button
              className="toggleButton"
              onClick={() => setIsHiddenUlOpen(!isHiddenUlOpen)}
            >
              {isHiddenUlOpen ? <FaAngleUp /> : <FaAngleDown />}
            </button>
          </Col>
          <Col lg="8">
            <Row>
              <Col className="sliderCol" lg="12">
                <Slider className="slider" {...settings}>
                  {[...Array(6)].map((_, index) => (
                    <div key={index}>
                      <img src={heroBanner} alt="Banner" />
                    </div>
                  ))}
                </Slider>
              </Col>
              <Col lg="12">
                <Slider className="mediaSlider" {...mediaSettings}>
                  {[
                    { img: spanner, text: "Бесплатная сборка" },
                    { img: hands, text: "Рассрочка 4 мес./0% без переплат" },
                    { img: delivery, text: "Бесплатная доставка" },
                    { img: guarant, text: "Официальная гарантия" },
                    { img: price, text: "Лучшая цена" },
                  ].map(({ img, text }, index) => (
                    <div className="item" key={index}>
                      <img src={img} alt="" />
                      <span>{text}</span>
                    </div>
                  ))}
                </Slider>
                <div className="guarant">
                  {[
                    { img: spanner, text: "Бесплатная сборка" },
                    { img: hands, text: "Рассрочка 4 мес./0% без переплат" },
                    { img: delivery, text: "Бесплатная доставка" },
                    { img: guarant, text: "Официальная гарантия" },
                    { img: price, text: "Лучшая цена" },
                  ].map(({ img, text }, index) => (
                    <div className="item" key={index}>
                      <img src={img} alt="" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
