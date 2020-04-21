import React, { Component } from "react";
import BodyComponent from "../components/Body";
import Gamedetails from "../components/layout/GameDetail";

import { connect } from "react-redux";
import * as gameActions from "../actions/gameActions";
import { bindActionCreators } from "redux";

class App extends Component {
  render() {
    const { games } = this.props.game;
    const id = parseInt(this.props.match.params.id);

    return (
      <BodyComponent games={games} {...this.props}>
        {games.map(product => {
          if (id === product.id)
            return (
              <Gamedetails
                name={product.name}
                brand={product.brand}
                vidurl={product.vidurl}
                detail={product.details}
              ></Gamedetails>
            );
        })}
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
