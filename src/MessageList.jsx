import React, {Component} from 'react';

import Messages from './Message.jsx'; //messages

// function printNameUpdate(){
//   let newName = (JSON.stringify(this.props.currentUser));
//   return newName;
// }

function generateRandomString() {
  var generate = Math.random().toString(36).substr(2,6);
  return generate;
}

class MessageList extends Component {



  render() {
    const messageItems = this.props.messages.map((message) =>
      <Messages message={message} key={message.id || generateRandomString()}/>
    );
    return (
      <main className="messages">
          {messageItems}
          <div className="message system" >
        </div>
      </main>
    );
  }
}

export default MessageList;
