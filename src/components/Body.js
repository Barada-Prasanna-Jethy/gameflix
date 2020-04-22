import React, { Component } from "react";
import "antd/dist/antd.css";

import "./App.css";
import { Layout, Menu } from "antd";
import { onMenuClick } from "../actions/gameActions";

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
  menuClick(state) {
    this.props.actions.onMenuClick(state);
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
            {/* onMenuClick(!this.props.menuState) */}
            {this.props.menu ? (
              <Menu.Item
                onClick={() => {
                  this.menuClick(!this.props.menuState);
                }}
                key="4"
              >
                <div class="menu-button">
                  <div class="bar1"></div>
                  <div class="bar2"></div>
                  <div class="bar3"></div>
                </div>
              </Menu.Item>
            ) : null}
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
