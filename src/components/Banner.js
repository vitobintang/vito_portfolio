import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>Hi! I'm Delavito Bintang Mahaputra</h1>
              <p>I am a Nuclear Engineering student at Gadjah Mada University with an interest in programming and nuclear technology. My academic foundation in nuclear engineering is being applied in an ongoing research on Nuclear Power Plant Control Room Design at the National Research and Innovation Agency. With 2 years of experience as a Software Programmer at Gadjah Mada Aerospace Team, I have the versatile skills to tackle complex challenges with innovative solutions. I am excited to contribute my expertise to the dynamic field of nuclear technology and programming, and ready for new career opportunities.</p>
              <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img src={headerImg} alt="Header Img"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
