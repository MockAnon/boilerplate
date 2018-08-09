import React, {Component} from 'react';

import Messages from './Message.jsx'; //messages

// function printNameUpdate(){
//   let newName = (JSON.stringify(this.props.currentUser));
//   return newName;
// }

class MessageList extends Component {


      onNameUpdate = evt => {
      evt.preventDefault();
      console.log("Anonymous1" +  " changed their name to " + "nomnom.");
    }




  render() {
    const messageItems = this.props.messages.map((message) =>
      <Messages message={message} key={message.id}/>
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
