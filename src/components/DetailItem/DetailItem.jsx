import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  comments,
  delivery,
  features,
  guarant,
  payment,
  saleProduct,
} from "../../constants/Device";
import "./DetailItem.scss";
import { Link } from "react-router";
import CommentsItem from "../CommentsItem/CommentsItem";
import SaleProductItem from "../SaleProductItem/SaleProductItem";
import Slider from "react-slick";
import { FaXmark } from "react-icons/fa6";
import Rating from "../Rating/Rating";
import { Context } from "../../hooks/Context";

export default function DetailItem({ basketDbData }) {
  const [showNewComment, setShowNewComment] = useState(false);
  const [addNewComment, setAddNewComment] = useState(comments);
  const [activeImg, setActiveImg] = useState(0);
  const [showImg, setShowImg] = useState(false);
  const [newUserName, setNewUserName] = useState();
  const [newComment, setNewComment] = useState();
  const [newRating, setNewRating] = useState(0);
  const [countProduct, setCountProduct] = useState(0);
  const { dbBasket, setDbBasket } = useContext(Context);
  const handleNewComment = (e) => {
    e.preventDefault();

    if (!newUserName || !newComment || !newRating) {
      return;
    }

    const addComment = {
      id: addNewComment.length + 1,
      userName: newUserName,
      comment: newComment,
      rating: newRating,
      date: new Date().toLocaleDateString(),
    };

    setAddNewComment([...addNewComment, addComment]);
    setNewComment("");
    setNewRating(0);
    setNewUserName("");
    setShowNewComment(false);
  };

  const handleAddBasket = (singleProducts) => {
    setDbBasket((prevBasket) => {
      const isBasket = prevBasket.findIndex(
        (element) => element.id === singleProducts.id
      );

      if (isBasket !== -1) {
        const sameProduct = [...prevBasket];
        sameProduct[isBasket].countProduct = countProduct + 1;


        return sameProduct;
      } else {
        return [
          ...dbBasket,
          { ...singleProducts, countProduct },
        ];
      }
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="detailItem">
      <div
        className={
          showNewComment ? "activeNewComment newComment" : "newComment"
        }
      >
        <button onClick={() => setShowNewComment(false)} className="close">
          <FaXmark />
        </button>
        <form action="">
          <input
            onChange={(e) => setNewUserName(e.target.value)}
            type="text"
            placeholder="your Username"
          />
          <textarea
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="write a comment"
          />
          <input
            onChange={(e) => setNewRating(e.target.value)}
            type="number"
            min={1}
            max={5}
            placeholder="rate this product"
          />

          <button onClick={handleNewComment}>send</button>
        </form>
      </div>
      <Container>
        <Row className="justify-content-between">
          <Col lg="12">
            <div className="detailItemTop">
              {[activeImg] && (
                <div>
                  <h2 className="title">
                    {saleProduct[activeImg].productName}
                  </h2>
                  <div className="rating">
                    <Rating rate={saleProduct[activeImg].grade} />
                    <span>Отзывы: ({addNewComment.length})</span>
                  </div>
                </div>
              )}
            </div>
          </Col>

          <Col lg="6">
            <div className="detailSlider">
              <div className="smallImg">
                {saleProduct.slice(0, 3).map((element, index) => (
                  <img
                    className={activeImg === index ? "smallImgActive" : ""}
                    onClick={() => setActiveImg(index)}
                    key={index}
                    src={element.img}
                    alt={element.productName}
                  />
                ))}
              </div>

              <div className="bigImg">
                {saleProduct.length > 0 && (
                  <img
                    src={saleProduct[activeImg]?.img}
                    alt={saleProduct[activeImg]?.productName}
                    onClick={() => setShowImg(!showImg)}
                  />
                )}
              </div>
            </div>

            <div className="features">
              <h2>Основные характеристики</h2>

              <ol>
                {features.map(({ id, featureName, feature }) => {
                  return (
                    <li key={id}>
                      <p> {featureName}</p>
                      <p>{feature}</p>
                    </li>
                  );
                })}
              </ol>
              <Link>
                Смотреть все характеристики <AiOutlineArrowRight />{" "}
              </Link>
            </div>

            <h6>Описание товара</h6>
            <p>
              <span>Металлический корпус</span>
              Vinga Iron S140 – качественный и надежный ноутбук, выполненный в
              металлическом корпусе, что делает его невероятно прочным и очень
              привлекательным в плане дизайна. Выглядит ноутбук просто
              потрясающе. Компактность Данная модель позиционируется
              производителем как удобное решение для ежедневной работы или
              учебы...
            </p>
            <Link>
              Смотреть еще <AiOutlineDown />{" "}
            </Link>
          </Col>
          <Col lg="5">
            <div className="buy">
              <p className="productPrice">
                <span className="oldPrice">{basketDbData?.oldPrice} грн</span>
                {basketDbData?.price} <span>грн.</span>
              </p>
              <button
                onClick={() => handleAddBasket(basketDbData)}
                className="buyBtn"
              >
                Купить
              </button>
              <button className="buyBtn">КУПИТЬ В КРЕДИТ</button>
            </div>
            <div className="delivery">
              <h3 className="subTitle">Доставка</h3>
              <ol>
                {delivery.map(({ id, from, when, cost }) => {
                  return (
                    <li key={id}>
                      <span>{from}</span>
                      <span>{when}</span>
                      <Link>{cost}</Link>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="payment">
              <h3 className="subTitle">Оплата</h3>
              <ul>
                {payment.map(({ id, paymentType }) => {
                  return <li key={id}>{paymentType}</li>;
                })}
              </ul>
            </div>

            <div className="guarant">
              <h3 className="subTitle">Гарантия</h3>
              <ul>
                {guarant.map(({ id, guarantType }) => {
                  return <li key={id}>{guarantType}</li>;
                })}
              </ul>
            </div>

            <div className="comments">
              <h2 className="title">Отзывы ({addNewComment.length})</h2>
              {addNewComment.map(
                ({
                  id,
                  avatar,
                  userName,
                  rating,
                  ratingStar,
                  comment,
                  date,
                }) => (
                  <div key={id}>
                    <CommentsItem
                      id={id}
                      avatar={avatar}
                      userName={userName}
                      ratingStar={ratingStar}
                      comment={comment}
                      date={date}
                      showRating={true}
                      rating={rating}
                    />
                  </div>
                )
              )}
              <div className="commentBtn">
                <button
                  onClick={() => setShowNewComment(!showNewComment)}
                  className="btnBlue"
                >
                  ДОБАВИТЬ ОТЗЫВ
                </button>
              </div>
            </div>
          </Col>
          <Col lg="12">
            <Container>
              <Row>
                <h2 className="title">Вместе с этим товаром покупают</h2>
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
  );
}
