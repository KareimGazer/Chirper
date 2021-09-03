import React, { Component } from "react";
import { connect } from "react-redux";
import { handelInitialData } from "../actions/shared";
import Dashboad from "./Dashboad";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handelInitialData());
  }
  render() {
    return (
      <div>
        {this.props.loading === true ? (
          <h1 className="center">Loading ...</h1>
        ) : (
          <Dashboad />
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
