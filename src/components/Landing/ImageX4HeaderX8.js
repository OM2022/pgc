import React from "react";

// reactstrap components
import {  Container, Row, Col } from "reactstrap";


function ImageX4HeaderX8() {
  return (
    <>
      <div className="section section-components pb-0 bg-mechabrown" id="section-components">
        <Container>
          <Row className="justify-content-center">
            <Col lg="4">
              <img src="https://placekitten.com/400/600" className="rounded x4Image"></img>
            </Col>
            <Col lg="8">
              <h2 className="mb-5 content-center header-white">
                <span>Header</span>
              </h2>
              <p className="lead">
                I will be the leader of a company that ends up being worth billions
                of dollars, because I got the answers. I understand culture. I am
                the nucleus. I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that things could
                be at.
              </p>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  );
}

export default ImageX4HeaderX8;
