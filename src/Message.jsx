// import data from "./data.json"; //added import data

import React, {Component} from 'react';

class Messages extends Component {
  render() {
    return (
        <div className="message" >
          <span className="message-username"> {this.props.message.username} </span>
          <span className="message-content"> {this.props.message.content} </span>
        </div>
    );
  }
}

export default Messages;