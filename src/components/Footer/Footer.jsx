import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaCcMastercard,
  FaCcVisa,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router";
import "./Footer.scss";
import logo from "../../assets/img/Frame 7780.svg";
export default function Footer() {
  return (
    <footer>
      <Container>
        <Row className="justify-content-between">
          <Col lg="3" className="d-none d-lg-block">
            <ul>
              <h2>Информация</h2>
              <li>
                <Link>Акции</Link>
              </li>
              <li>
                <Link>Кредит</Link>
              </li>
              <li>
                <Link>Оплата и доставка</Link>
              </li>
              <li>
                <Link>Гарантия</Link>
              </li>
              <li>
                <Link>Частые вопросы</Link>
              </li>
              <li>
                <Link>Новости</Link>
              </li>
              <li>
                <Link>Блог</Link>
              </li>
              <li>
                <Link> О нас</Link>
              </li>
              <li>
                <Link>Политика конфиденциальности</Link>
              </li>
              <li>
                <Link>Контакты</Link>
              </li>
            </ul>
          </Col>
          <Col lg="3" className="d-none d-lg-block">
            <ul>
              <h2> Услуги и сервисы</h2>
              <li>
                <Link>Сервисный центр v-comp</Link>
              </li>
              <li>
                <Link>Магазин Б/У товара</Link>
              </li>
              <li>
                <Link>Скупка Б/У </Link>
              </li>
              <li>
                <Link>Ремонт ПК и оргтехники</Link>
              </li>
              <li>
                <Link>Компьютерная помощь</Link>
              </li>
              <li>
                <Link>Сотрудничество</Link>
              </li>
              <li>
                <Link>Главная</Link>
              </li>
            </ul>
          </Col>
          <Col lg="3" className="d-none d-lg-block">
            <ul>
              <h2>Контакты</h2>
              <li>
                <Link>(067) 11-12-485 - Отдел продаж</Link>
              </li>
              <li>
                <Link>(066) 484-39-22 - Отдел продаж</Link>
              </li>
              <li>
                <Link>(063) 747-33-48 - Отдел продаж</Link>
              </li>
              <li>
                <Link>Днепр Европейская, 8 (бывшая Миронова 8)</Link>
              </li>
              <li>
                <Link>Понедельник-Пятница 9:00-19:00</Link>
              </li>
              <li>
                <Link>Суббота-Воскресенье: с 9:00-16:00</Link>
              </li>
            </ul>
          </Col>
          <Col lg="3">
            <h2>Следите за нами</h2>
            <div className="socials">
              <Link>
                <FaInstagram />
              </Link>
              <Link>
                <FaFacebook />
              </Link>
              <Link>
                <FaWhatsapp />
              </Link>
              <Link>
                <FaTelegram />
              </Link>
              <Link>
                <FaYoutube />
              </Link>
              <Link>
                <FaLinkedin />
              </Link>
            </div>
            <div className="phoneFooter">
              <Link>
              <img src={logo} alt="" />
              </Link>
            </div>
            <form action="">
              <label htmlFor="">Подписывайтесь на скидки</label>
              <input type="text" placeholder="Укажите ваш email..." />
            </form>
          </Col>
          <Col className="footerBottom text-center">
            <div className="leftSide">
              <Link>
                <img src={logo} alt="" />
              </Link>
              <p>2008-2021 Интернет-магазин v-comp.com.ua
              Все права защищены</p>
            </div>
            <div className="payment">
              <Link>
                <FaCcVisa />
              </Link>
              <Link>
                <FaCcMastercard />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
