import React from "react";
import { Card } from "antd";
export default function GameDetail(props) {
  return (
    <div className="details-page">
      <Card className="details">
        {/*<Card className="card-container"> */}

        <iframe
          className="video"
          height="310"
          src={`${props.vidurl}?autoplay=1&controls=0`}
          allow="autoplay;fullscreen;"
        ></iframe>

        <div class="info">
          <p>Game Name : {props.name}</p>
          <br />
          <p>Release Date : 11.22.2012</p>
          <br />
          <p>Publisher : {props.brand}</p>
          <p class="desc">{props.detail}</p>
        </div>
        {/* <div>
          <p class="desc">{props.detail}</p>
        </div> */}

        {/* 
        <img className="cover" src={props.url} alt="img-game" />
        <p>Game Name : {props.name}</p>
        <br />
        <p>Release Date : 11.22.2012</p>
        <br />
        <p>Publisher : {props.brand}</p>

        <p>{props.detail}</p> */}
      </Card>
    </div>
  );
}
