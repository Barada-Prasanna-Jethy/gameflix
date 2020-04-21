import React, { Component } from "react";
import { Card } from "antd";
import "../App.css";
const { Meta } = Card;

export default class Sidebar extends Component {
  render() {
    return (
      <Card.Grid style={{ width: "10%" }}>
        <Card
          bordered={false}
          actions={[
            <a href={`#/info/${this.props.id}`}>Details</a>,
            "Add to Cart"
          ]}
          style={{ width: 230 }}
          cover={<img alt="game img" src={this.props.url} />}
        >
          {" "}
          <Meta title={this.props.name} description={"2000$"} />
        </Card>
      </Card.Grid>
    );
  }
}
