import React, {Component} from 'react';

import Messages from './Message.jsx'; //messages

class MessageList extends Component {
  render() {
    return (
      <main className="messages">
          <Messages />
          <div className="message system">
            Anonymous1 changed their name to nomnom.
        </div>
      </main>

    );
  }
}

export default MessageList;