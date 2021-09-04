import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handelInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import Nav from "./Nav";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handelInitialData());
  }
  render() {
    return (
      <Router>
        <div className="container">
          <LoadingBar />
          <Nav />
          {this.props.loading === true ? (
            <h1 className="center">Loading ...</h1>
          ) : (
            <div>
              <Route path="/" exact component={Dashboard} />
              <Route path="/tweet/:id" component={TweetPage} />
              <Route path="/new" component={NewTweet} />
            </div>
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
