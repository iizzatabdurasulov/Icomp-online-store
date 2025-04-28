import { Col, Container, Row } from "react-bootstrap";
import "./NewsHome.scss";
import { newsData } from "../../constants/Device";
import { FaArrowRight } from "react-icons/fa";

export default function NewsHome() {
  return (
    <div className="newsHome">
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className="title">Новости</h1>
          </Col>

          {newsData.map(({ id, image, title, text, date }) => {
            return (
              <Col lg={3} md={6} key={id}>
                <div className="newsItem">
                  <img src={image} alt="" />
                  <h3>{title}</h3>
                  <p className="text">{text}</p>
                  <div className="bottom">
                    <p className="date">{date}</p>
                    <button>
                      Читать полностью <FaArrowRight />
                    </button>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
