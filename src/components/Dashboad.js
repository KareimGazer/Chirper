import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";

class Dashboard extends Component {
  render() {
    // console.log("tweetsIds", this.props.tweetsIds);
    return (
      <div>
        <h3 className="center">Time Line</h3>
        <ul className="dashboard-list">
          {this.props.tweetsIds.map((tweetId) => (
            <li key={tweetId}>
              <Tweet id={tweetId}></Tweet>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ tweets }) {
  return {
    tweetsIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(Dashboard);
