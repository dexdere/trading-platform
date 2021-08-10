import React from "react";
import style from "./style.module.css";
import logo from "./img/logo.png";
import { Button, Image, Container, Row, Col } from "react-bootstrap/";
import { Link } from "react-router-dom";

import icon1 from "./img/home-page-icon-1.png";
import icon2 from "./img/home-page-icon-2.png";
import icon3 from "./img/home-page-icon-3.png";
import icon4 from "./img/home-page-icon-4.png";

function HomePage() {
  return (
    <div className={style.HomePage}>
      <div>
        <h1>
          <b>BitNeb Crypto Market</b>{" "}
        </h1>
        <div className={style.titleUnderLine} />
      </div>

      <div className={style.underLine} />
      <Container className={style.content}>
        <Row>
          <Col>
            <h4>
              <b>
                <span style={{ color: "#4f46cc" }}>Hızlıca</span> <br /> Üye Ol
              </b>
            </h4>
            <Image className={style.png} src={icon1} rounded />
            <p>
              Birkaç adımda üye olun, üyeliğinizi onaylayın ve hızlıca giriş
              yapın
            </p>
          </Col>
          <Col>
            <h4>
              <b>
                <span style={{ color: "#4f46cc" }}>Kolayca</span> <br /> Para
                Yatır
              </b>
            </h4>
            <Image className={style.png} src={icon2} rounded />
            <p>
              İster bankadan Havale/EFT ister ödeme kuruluşundan TL gönderin
            </p>
          </Col>
          <Col>
            <h4>
              <b>
                <span style={{ color: "#4f46cc" }}>Doğru</span> <br /> Analiz
                Yap
              </b>
            </h4>
            <Image className={style.png} src={icon3} rounded />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            </p>
          </Col>
          <Col>
            <h4>
              <b>
                <span style={{ color: "#4f46cc" }}>Anında</span> <br /> Satın Al
              </b>
            </h4>
            <Image className={style.png} src={icon4} rounded />
            <p>Tek işlemle anında 25 bin TL'ye kadar Bitcoin alın</p>
          </Col>
        </Row>
      </Container>

      <br />
      <br />
      <br />

      <Link to="/exchange">
        <Button id={style.button} variant="primary">
          Hemen Başlayın
        </Button>
      </Link>

      <div className={style.footer}>
        <Container>
          <Row className={style.footerRow}>
            <Col className="col-3">
              <Image className={style.png} style={{maxWidth:"100%", height:"auto"}} src={logo} fluid />
            </Col>
            <div className={style.verticalLine} />
            <Col className="col-6">
              <h4>
                <b>Farklı Kriptoparalar ve Limit/Stop Emirleri Kullanın</b>{" "}
              </h4>
              <p>
                SkyNeb farklı kriptoparalar, gerçek zamanlı grafikler, grafil
                analiz araçları ve indikatörler ile profesyoneler için
                geliştirilmiş alım satım deneyimi sunar
              </p>
            </Col>
            <Col className="col-2">
              <Link to="/exchange">
                <Button id={style.button} variant="primary">
                  Hemen Başlayın
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
        <div className={style.underFooter} />
      </div>

      <div className={style.logo}>
        <img
          height="120px"
          style={{ paddingTop: "5px", paddingBottom: "5px" }}
          src={logo}
          alt=""
        />
      </div>
    </div>
  );
}

export default HomePage;
