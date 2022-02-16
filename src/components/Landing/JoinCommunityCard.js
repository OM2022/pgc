import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle } from "reactstrap";

// Core Components

function CommunityCard() {
    function joinCommunity() {
        window.location = "https://discord.com/invite/VAMfGWqWEB";
    }

    return (
    <>
        <img data-animation={"zooming"} src={require("assets/img/community_banner.png")}  className="rounded community-card-background"

             onClick={joinCommunity}
             style={{
            width : "100%"


        }}></img>
    </>
  );
}

export default CommunityCard;
