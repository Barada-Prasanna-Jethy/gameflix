import React, { Component } from "react";
import "antd/dist/antd.css";
import "../App.css";

import { Layout, Menu, Radio, Rate } from "antd";
import Checkboxes from "./Checkboxes";
import Content from "./PageContent";

import { DollarOutlined, ShopOutlined, StarOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;
const { Sider } = Layout;

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px"
};

export default class Sidebar extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // onSearch(value) {
  //   let newState = [];
  //   const text = value.toLowerCase();
  //   const prevState = this.state.data;

  //   for (let i = 0; i < prevState.length; i++) {
  //     if (
  //       prevState[i].name.toLowerCase().indexOf(text) !== -1 &&
  //       this.state.checkedBrands.includes(prevState[i].brand)
  //     ) {
  //       newState.push(prevState[i]);
  //     }
  //   }
  //   this.setState({ items: newState, searchText: value });
  // }

  // brandsOnChange = brands => {
  //   let newState = [];
  //   const prevState = this.state.data;
  //   newState = prevState.filter(item => {
  //     return (
  //       brands.includes(item.brand) &&
  //       item.name.toLowerCase().indexOf(this.state.searchText) !== -1
  //     );
  //   });
  //   this.setState({ items: newState, checkedBrands: brands });
  // };

  render() {
    return (
      <Layout>
        <Sider
          width={200}
          className={`site-layout-background ${
            this.props.menuState ? "active" : ""
          } `}
          style={{
            position: "fixed",
            top: "20px",
            left: 0
          }}
        >
          <Menu
            className={`sideMenu ${this.props.menuState ? "active" : ""}`}
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            theme="dark"
          >
            <SubMenu
              key="price"
              title={
                <span>
                  <DollarOutlined />
                  Price Range
                </span>
              }
            >
              <Radio.Group style={{ marginLeft: "2em" }}>
                <Radio style={radioStyle} value={1}>
                  0-2000
                </Radio>
                <Radio style={radioStyle} value={2}>
                  2000-7000
                </Radio>
                <Radio style={radioStyle} value={3}>
                  7000-10000
                </Radio>
              </Radio.Group>
              
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <ShopOutlined />
                  Brands
                </span>
              }
            >
              <Checkboxes
                games={this.props.games}
                brands={this.props.brands}
                searchtext={this.props.searchtext}
                {...this.props}
              />
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <StarOutlined />
                  Rating
                </span>
              }
            >
              <Rate
                style={{ marginLeft: "1em" }}
                allowHalf
                defaultValue={2.5}
              />{" "}
              & UP
            </SubMenu>
          </Menu>
        </Sider>
        <Content
          items={this.props.items}
          games={this.props.games}
          {...this.props}
        />
      </Layout>
    );
  }
}
