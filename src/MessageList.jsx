import React, {Component} from 'react';

import Messages from './Message.jsx'; //messages

class MessageList extends Component {
  render() {
    const messageItems = this.props.messages.map((message) =>
      <Messages message={message} key={message.id}/>
    );
    return (
      <main className="messages">
          {messageItems}
          <div className="message system">
            Anonymous1 changed their name to nomnom.
        </div>
      </main>
    );
  }
}

export default MessageList;
