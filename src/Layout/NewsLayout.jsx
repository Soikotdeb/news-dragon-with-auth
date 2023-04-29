import React from "react";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../pages/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";


const NewsLayout = () => {
  return (
    <div>
      <Header></Header>

      <Container>
        <Row>
        

          <Col lg={9}>
            <Outlet></Outlet>
          </Col>

          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default NewsLayout;
