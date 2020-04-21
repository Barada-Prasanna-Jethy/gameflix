import React, { Component } from "react";
import "antd/dist/antd.css";

import "./App.css";
import { Layout, Menu } from "antd";

const { Header } = Layout;

class App extends Component {
  componentDidMount() {
    const { getBrands, getGames } = this.props.actions;

    getGames().then(() => {
      const games = this.props.games;
      const brands = [];

      for (let i = 0; i < games.length; i++) {
        if (!brands.includes(games[i].brand)) {
          brands.push(games[i].brand);
        }
      }
      getBrands(brands);
    });
  }
  render() {
    return (
      <Layout className="layout">
        <Header className="header">
          <div className="logo" />
          <Menu
            className="headerMenu"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">
              <a href="/">Home</a>
            </Menu.Item>
            <Menu.Item key="2"></Menu.Item>
            <Menu.Item key="3">About</Menu.Item>
          </Menu>
        </Header>
        {this.props.children}
      </Layout>
    );
  }
}
export default App;
