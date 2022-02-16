import React from "react";

// reactstrap components
import {  Container, Row, Col } from "reactstrap";
import JoinCommunityCard from "../Landing/JoinCommunityCard.js";


function ImageX4HeaderX8() {

  const gnomesGif = require("assets/img/mechagnomes.gif")
  return (
    <>
      <div className="section section-components pb-0 bg-mechabrown hxieader" id="section-components">
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <h1 className="font-weight-light header-white">Welcome</h1>
              <p className="lead">
                Welcome to the official Mechagnomes website. Mechagnomes are a collection of 7,654 gnomes that are your ticket to being a part of MECHA, our gaming and crypto first, consumer electronics company. Earn our native token $MECHA, which are backed by the profits from the sales of all MECHA products, by simple holding a Mechagnome. To start things off we will be releasing our flagship product, The MECHAnical Keyboard, which will be followed by a crypto hardware wallet.</p>
              <JoinCommunityCard />
            </Col>
            <Col lg="4"className={"pt-5"} >
              <img src={gnomesGif}  className="rounded overflow-hidden transform-perspective-right x4Image"></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ImageX4HeaderX8;
