import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Container,
  Row,
  Col, CarouselItem,
} from "reactstrap";

// Core Components

function MechaFAQ() {
  const [openedCollapse, setOpenedCollapse] = React.useState("collapse--0");
  const faqItems = [
    {
      title: "When do Mechagnomes drop?",
      content: `The stealth drop is official LIVE! you can mint now, just scroll up and have your wallet connected :).`
    },
    {
      title: "Is my Mechagnome revealed immediately?",
      content: `Yes, they will reveal immediately after purchase :)`
    },
    {
      title: "How can I mint a Mechagnome?",
      content: `If the mint is open, simply have .0275 ETH(for each Mechagnome you’d like) in your wallet(Metamask is probably easiest) + gas, scroll up to the Build-A-Mechagnome section and enter your desired quantity.`
    },
    {
      title: "What can I do with my Mechagnomes?",
      content: `Check out our roadmap for some extra details about utility, however outside of the roadmap, your mechagnome is yours to do what you want with.
       Whether that’s reselling it, put it on apparel, make it your Twitter profile picture, it’s yours.`
    },

  ];



  return (
    <>
      <div className="accordion-1 bg-mechabrown">
        <Container>
          <Row>
            <Col className="mx-auto text-center" md="12">
              <h1 className="font-weight-light header-white">Frequently Asked Questions</h1>

              <div className="accordion faqAccordion" id="faqAccordion">
                {faqItems.map((item, i) => {
                  return (
                      <Card key={i}>
                        <CardHeader id={`heading${i}`}>
                          <h5 className="mb-0">
                            <Button
                                aria-expanded={openedCollapse === "collapse-"+i}
                                onClick={() =>
                                    setOpenedCollapse(
                                        openedCollapse === "collapse-"+i ? "" : "collapse-"+i
                                    )
                                }
                                className={`w-100 text-left ${i === 0 ? "" : "collapsed"} header-white`}
                                color="link"
                                type="button"
                            >
                              {item.title}{" "}
                              <i className="ni ni-bold-down float-right pt-1"></i>
                            </Button>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={openedCollapse === "collapse-"+i}>
                          <CardBody className="opacity-8 header-white">
                            {item.content}
                          </CardBody>
                        </Collapse>
                      </Card>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default MechaFAQ;
