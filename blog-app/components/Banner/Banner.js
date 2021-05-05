import { Carousel, Row, Col } from "antd";
import styles from "./Banner.module.scss";
const Banner = () => {
  return (
    <Row className={styles.bannerWrap} type="flex" justify="center">
      <Col xs={24} sm={24} md={18} lg={20} xl={16}>
        <Carousel effect="fade" autoplay className={styles.banner}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </Col>
    </Row>
  );
};

export default Banner;
