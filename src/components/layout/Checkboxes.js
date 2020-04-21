import React, { Component } from "react";
import { Checkbox } from "antd";

import { onchange } from "../../utils";

const CheckboxGroup = Checkbox.Group;
class Checkboxes extends Component {
  state = {
    checkedList: this.props.brands,
    indeterminate: true,
    checkAll: false
  };

  onChange = checkedList => {
    const { brands, searchtext, games } = this.props;
    this.setState(
      {
        checkedList,
        indeterminate:
          !!checkedList.length && checkedList.length < brands.length,
        checkAll: checkedList.length === brands.length
      },
      () => {
        console.log(this.props);
        this.props.actions.onChange(
          onchange(games, searchtext, this.state.checkedList)
        );
      }
    );
  };

  onCheckAllChange = e => {
    const { searchtext, games } = this.props;

    this.setState(
      {
        checkedList: e.target.checked ? this.props.brands : [],
        indeterminate: false,
        checkAll: e.target.checked
      },
      () =>
        this.props.actions.onChange(
          onchange(games, searchtext, this.state.checkedList)
        )
    );
  };

  render() {
    return (
      <div style={{ marginLeft: "2em" }}>
        <div className="site-checkbox-all-wrapper">
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Select all
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup
          style={{ display: "grid" }}
          options={this.props.brands}
          value={this.state.checkedList}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
export default Checkboxes;
