// import data from "./data.json"; //added import data

import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx'; //chatBar

class App extends Component {
  constructor(props) { ///set initial state
    super(props);
    this.state = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: []
  };
}

//                mountcode
  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.sendJson = obj => this.socket.send(JSON.stringify(obj));
    this.socket.onopen = () => {
      console.log('Connected to socket');
    };
    // this.socket.onmessage = this._handleSocketMessage;
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      this.setState({messages: this.state.messages})
    }, 3000);

//          RECIEVE MESSAGE FROM SERVER
  this.socket.onmessage = (event) => {
    let objData = (JSON.parse(event.data));
    console.log("received", objData);

    const messages = [...this.state.messages, objData];


    console.log("messages", messages);

  this.setState({ messages });
  }
}

//        ADD MESSAGES SERVER SOCKET
  addMessage = (message, username) => {
    // Construct a msg object containing the data the server needs to process the message from the chat client.
    var msg = {
      username: username,
      content: message
    };
    this.socket.send(JSON.stringify(msg));
  }


    onNameChange = evt => {
      evt.preventDefault();
      this.setState({ currentUser: {name: evt.target.value}});
      console.log("printing out name", evt.target.value);
    };


//          RENDERING
  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>
    } else {
    return (
    <div>
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
    </nav>
      <MessageList messages={this.state.messages} exampleSocket={this.socket}/>
      <ChatBar currentUser={this.state.currentUser} addMessage={this.addMessage} exampleSocket={this.socket} onNameChange={this.onNameChange}/>
    </div>
      );
    }
  }
}

export default App;
