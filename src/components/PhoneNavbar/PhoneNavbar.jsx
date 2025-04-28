import React, { useContext, useEffect, useState } from "react";
import "./PhoneNavbar.scss";
import { Container } from "react-bootstrap";
import { FaBars, FaPhone, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../../assets/img/Frame 7780.svg";
import { GrCatalog } from "react-icons/gr";
import { FaXmark } from "react-icons/fa6";
import { deviceData, phones } from "../../constants/Device";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Context } from "../../hooks/Context";
import BasketCard from "../BasketCard/BasketCard";
export default function PhoneNavbar() {
  const [openBars, setOpenBars] = useState(false);
  const [search, setSearch] = useState(false);
  const [catalog, setCatalog] = useState(false);
  const [phone, setPhone] = useState(false);
  const [value, setValue] = useState();
  const { dbBasket, showBasket, setShowBasket } = useContext(Context);

  useEffect(() => {
    if (search || catalog || phone || openBars || showBasket) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [search, catalog, phone, openBars, showBasket]);

  return (
    <div className={"phoneNavbar"}>
      <div className={search ? "searchModal activeSearchModal" : "searchModal"}>
        <form action="">
          <input type="text" required placeholder="Искать" />
          <button>
            <FaSearch />
          </button>
        </form>
      </div>
      <div
        className={catalog ? "catalogModal activeCatalogModal" : "catalogModal"}
      >
        <button className="close" onClick={() => setCatalog(false)}>
          <FaXmark />
        </button>
        <ul>
          {deviceData.map(({ id, leftIcons, deviceName, slug, rightIcons }) => (
            <li key={id}>
              <Link to={slug}>
                <span>
                  {leftIcons}
                  {deviceName}
                </span>
                {rightIcons}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={phone ? "phoneModal activePhoneModal" : "phoneModal"}>
        <div className="phoneBodyModal">
          <button onClick={() => setPhone(false)} className="close">
            <FaXmark />
          </button>
          <h3>Наши телефоны</h3>
          <ul>
            {phones.map(({ id, phone }) => {
              return (
                <li key={id}>
                  <Link>
                    <FaPhone className="phoneIcon" />
                    {phone}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p>или</p>
          <form action="">
            <label htmlFor="">Перезвонить мне</label>
            <input type="text" placeholder="Ваше имя" />
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
            />
            <button>ЗАКАЗАТЬ ЗВОНОК</button>
          </form>
        </div>
      </div>
      <Container>
        {showBasket && (
          <div
            className={
              showBasket ? "basketModal activeBasketModal" : "basketModal"
            }
          >
            <div className="basketContent">
              <button className="close" onClick={() => setShowBasket(false)}>
                <FaXmark />
              </button>
              <BasketCard onClose={() => setShowBasket(false)} />
            </div>
          </div>
        )}
        <div className="navbar">
          <div
            className={openBars ? " navbarBars activeNavbar  " : "navbarBars"}
          >
            <button className="close" onClick={() => setOpenBars(false)}>
              <FaXmark />
            </button>

            <ul>
              <li>Акции</li>
              <li>Кредит</li>
              <li>Оплата и доставка</li>
              <li>Помощь</li>
              <li>Скупка Б/У</li>
              <li>Контакты</li>
            </ul>
          </div>
          <button onClick={() => setOpenBars(true)}>
            <FaBars />
          </button>
          <Link to={"/"} className="logo">
            <img src={logo} alt="" />
          </Link>
          <button onClick={() => setPhone(!phone)}>
            <FaPhone />
          </button>
        </div>
        <div className="catalog">
          <button
            onClick={() => setCatalog(!catalog)}
            className="catalogButton"
          >
            КАТАЛОГ ТОВАРОВ <GrCatalog className="catalogIcon" />{" "}
          </button>
          <button onClick={() => setSearch(!search)} className="search">
            {search ? <FaXmark /> : <FaSearch />}
          </button>
          <button
            onClick={() => setShowBasket(!showBasket)}
            className="shoppingCart"
          >
            <FaShoppingCart />
            <span>{dbBasket?.length}</span>
          </button>
        </div>
      </Container>
    </div>
  );
}
