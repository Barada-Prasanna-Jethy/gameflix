import React, { Component } from "react";
import BodyComponent from "../components/Body";
import SideBar from "../components/layout/Sidebar";

import { connect } from "react-redux";
import * as gameActions from "../actions/gameActions";
import { bindActionCreators } from "redux";

class App extends Component {
  render() {
    const {
      games,
      brands,
      searchtext,
      checkedbrands,
      items,
      menuState
    } = this.props.game;

    return (
      <BodyComponent
        menu={true}
        menuState={menuState}
        games={games}
        {...this.props}
      >
        <SideBar
          games={games}
          brands={brands}
          searchtext={searchtext}
          checkedbrands={checkedbrands}
          items={items}
          menuState={menuState}
          {...this.props}
        />
      </BodyComponent>
    );
  }
}

const mapStateToProps = state => {
  return {
    game: state.game
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...gameActions }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
