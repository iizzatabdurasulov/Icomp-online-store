import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { comments, instaComment } from "../../constants/Device";
import CommentsItem from "../CommentsItem/CommentsItem";
import Slider from "react-slick";
import "./Comments.scss";
import { Link } from "react-router";

export default function Comments() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  var instaCommentSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="comments">
      <Container>
        <Row className="justify-content-between">
          <Col lg={6}>
            <h2 className="title">Отзывы</h2>
            <Slider {...settings}>
              {comments
                .slice(0, 3)
                .map(
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
                        rating={rating}
                        ratingStar={ratingStar}
                        comment={comment}
                        date={date}
                        showRating={true}
                      />
                    </div>
                  )
                )}
            </Slider>
            <Link>Все отзывы на Google</Link>
          </Col>
          <Col lg="5">
            <h2 className="title">Инстаграм</h2>
            <div className="instagram">
              {instaComment.map((element, value) => {
                return <img key={value} src={element} alt="" />;
              })}
            </div>
            <div className="sliderInsta">
              <Slider {...instaCommentSlider}>
                {instaComment.map((element, value) => {
                  return <img key={value} src={element} alt="" />;
                })}
              </Slider>
            </div>
            <Link>Все отзывы на Google</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
