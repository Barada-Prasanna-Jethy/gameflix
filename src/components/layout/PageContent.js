import React, { Component } from "react";

import Itemcard from "./Itemcard";

import { onchange } from "../../utils";

import { Layout, Input, Pagination, Card } from "antd";
const { Search } = Input;
const { Content } = Layout;

class PageContent extends Component {
  onSearch(value) {
    const { checkedbrands, games } = this.props;
    const obj = onchange(games, value, checkedbrands);

    this.props.actions.onChange(obj);
  }
  render() {
    return (
      <Layout style={{ padding: "0 24px 50px" }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          <Search
            placeholder="input search text"
            allowClear
            onKeyUp={event => this.onSearch(event.target.value)}
            onSearch={this.onSearch}
            style={{ marginBottom: "1em" }}
          />
          <div className="site-card-wrapper">
            <div className="card-container">
              {this.props.items.map((product, index) => {
                if (0 <= index)
                  return (
                    <Itemcard
                      id={product.id}
                      name={product.name}
                      url={product.url}
                    ></Itemcard>
                  );
              })}

              {/* <div className="pagination">
                <Pagination defaultCurrent={1} total={50} />
              </div> */}
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}
export default PageContent;
