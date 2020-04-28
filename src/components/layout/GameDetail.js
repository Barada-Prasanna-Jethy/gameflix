import React from "react";
export default function GameDetail(props) {
  return (
    <div className="details-page">
      <div className="details">
        <div class="info">
          <p>Game Name : {props.name}</p>
          <br />
          <p>Release Date : 11.22.2012</p>
          <br />
          <p>Publisher : {props.brand}</p>
          <p class="desc">{props.detail}</p>
        </div>
        <iframe
          className="video"
          height="310"
          src={`${props.vidurl}?autoplay=1&controls=0`}
          allow="autoplay;fullscreen;"
        ></iframe>
      </div>
    </div>
  );
}
