import React from "react";

// reactstrap components
import { Container, Row, Button } from "reactstrap";

// Core Components
import MechaNavbar from "components/MechaNavbar.js";
import MechaFooter from "components/MechaFooter.js";
import MechaHeader from "components/MechaHeader.js";

import Carousel from "components/MechaEXCarousel.js";
import 'assets/css/style.css';
import MechaContactUS from "../components/MechaContactUS";



function Assets() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (
      window.location.href.lastIndexOf("#") > 0 &&
      document.getElementById(href)
    ) {
      document.getElementById(href).scrollIntoView();
    }
    return function cleanup() {
      document.body.classList.remove("index-page");
    };
  });
  return (
    <>
      <MechaNavbar type="transparent" />
      <div className="wrapper">
        <Button
          className="btn-icon-only back-to-top show"
          color="dark"
          name="button"
          type="button"
          onClick={() => {
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
          }}
        >
          <i className="ni ni-bold-up"></i>
        </Button>
        <MechaHeader  />

        <Carousel />
        <MechaContactUS />

        <MechaFooter />
      </div>
    </>
  );
}

export default Assets;
