import { BiCartAdd } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import React, { useContext, useEffect, useState } from "react";
import "./Navbar.scss";
import { Col, Container, Row } from "react-bootstrap";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import logo from "../../assets/img/Frame 7780.svg";
import { GrCatalog } from "react-icons/gr";
import { Link, useNavigate } from "react-router";
import { Context } from "../../hooks/Context";
import BasketCard from "../BasketCard/BasketCard";
import { FaXmark } from "react-icons/fa6";
export default function Navbar() {
  const [activeModal, setActiveModal] = useState(false);
  const {showBasket, setShowBasket} = useContext(Context);
  useEffect(() => {
    if (activeModal && showBasket) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeModal, showBasket]);

  const { comparison, favorites, dbBasket } = useContext(Context);
  const navigate = useNavigate();
  return (
    <nav>
      {showBasket && (
        <div
          className={
            showBasket ? "basketModal activeBasketModal" : "basketModal"
          }
        >
         
            <button className="close" onClick={() => setShowBasket(false)}>
              <FaXmark />
            </button>
            <BasketCard onClose={() => setShowBasket(false)} />
         
        </div>
      )}

      <div
        className={
          activeModal ? "activeModalRegister modalRegister" : "modalRegister"
        }
      >
        <div className="modalBody">
          <button className="closeModal" onClick={() => setActiveModal(false)}>
            <FaXmark />
          </button>
          <h3>Вход</h3>
          <form action="">
            <input type="text" placeholder="Ваш номер телефона" required />
            <input type="text" placeholder="Пароль" required />

            <Link className="resetPassword" to="/user">
              Забыли пароль?
            </Link>
            <button>ВОЙТИ</button>
          </form>
          <p>или войти с помощью</p>
          <div className="googleFacebook">
            <button>Google</button>
            <button>Facebook</button>
          </div>
          <h4>
            Нет аккаунта?
            <Link>Зарегистрироваться</Link>
          </h4>
        </div>
      </div>
      <div className="navTop">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col lg="auto" className="left-side">
              <ul>
                <li>
                  <FaBars />
                </li>
                <li>Акции</li>
                <li>Кредит</li>
                <li>Оплата и доставка</li>
                <li>Помощь</li>
                <li>Скупка Б/У</li>
                <li>Контакты</li>
              </ul>
            </Col>
            <Col lg={2} className="right-side">
              <button className="lang">
                EU
                <span>/ RU</span>
              </button>
              <button onClick={() => setActiveModal(true)} className="user">
                <FaUser />
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="navBottom">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col lg="auto" className="logo">
              <Link to={"/"}>
                <img src={logo} alt="" />
              </Link>
            </Col>
            <Col lg="auto">
              <button className="catalogButton">
                КАТАЛОГ ТОВАРОВ <GrCatalog className="catalogIcon" />{" "}
              </button>
            </Col>
            <Col lg="5">
              <form action="">
                <input type="text" placeholder="Поиск " />
                <button>
                  <FaSearch />
                </button>
              </form>
            </Col>
            <Col lg="auto" className="right-side">
              <p>
                1234567
                <BiChevronDown className="down" />
              </p>
              <ul>
                <li>
                  <FaBalanceScaleLeft />
                  <span>{comparison.length}</span>
                </li>
                <li>
                  <BiHeart />
                  <span>{favorites.length}</span>
                </li>

                <li onClick={() => setShowBasket(!showBasket)}>
                  <BiCartAdd />

                  <span>{dbBasket?.length}</span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </nav>
  );
}
