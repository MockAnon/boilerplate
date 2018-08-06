import React, {Component} from 'react';

import Messages from './Message.jsx'; //messages
import MessageList from './MessageList.jsx';


import ChatBar from './ChatBar.jsx'; //chatBar

class App extends Component {
  render() {
    return (
    <div>
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
    </nav>


      <MessageList />

      <ChatBar />

    </div>

    );
  }
}
export default App;
