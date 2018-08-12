// import data from "./data.json"; //added import data

import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx'; //chatBar

class App extends Component {
  constructor(props) { ///set initial state
    super(props);
    this.state = {
  currentUser: {name: "Bob", nameOld: "", color: "red"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [],
  count: 0,
  };
}

//                mountcode
  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.sendJson = obj => this.socket.send(JSON.stringify(obj));

    this.socket.onopen = (event) => {
      console.log('Connected to socket');
    };

    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      this.setState({messages: this.state.messages})
    }, 3000);

//          RECIEVE MESSAGE FROM SERVER
  this.socket.onmessage = (event) => {

    const objData = (JSON.parse(event.data));

    switch(objData.type) {
       //incoming message case
      case "incomingMessage":
        console.log("received", objData);
        const messages = [...this.state.messages, objData];
        console.log("messages", messages);
        this.setState({ messages });
        break;

      case "incomingNotification":
        this.setState({
          messages: [
            ...this.state.messages,
            {username: null, content: `${objData.nameOld} has changed name to ${objData.name}`}
          ]
        });

        break;

      case "count":
        console.log("count", objData);
        let newCount = objData.count;
        console.log("countNew", newCount);

        this.setState({ count: newCount});
        console.log(this.state);
        break;
      case "color":
        console.log("color", objData);
        let newColor = objData.color;
        console.log("color", newColor);
        this.setState({ color: newColor });

        this.setState({ currentUser: {name: this.state.currentUser.name, nameOld: this.state.currentUser.nameOld, color: newColor}});
        console.log(this.state);
        break;
      default:
        throw new Error("Unknown event type " + objData.type);
    }


  }
}

//        ADD MESSAGES SERVER SOCKET
  addMessage = (message, username) => {
    // Construct a msg object containing the data the server needs to process the message from the chat client.
    var msg = {
      username: username,
      content: message,
      type: "postMessage",
      color: this.state.currentUser.color
    };
    this.socket.send(JSON.stringify(msg));
  }

    onNameChange = evt => {
      if (evt.key == 'Enter'){
        evt.preventDefault();
        const newName= evt.target.value;
        console.log("printing out name", evt.target.value);
        const name = {
          name: newName,
          type: "postNotification",
          nameOld: this.state.currentUser.name,
        }
        this.setState({ currentUser: {name: newName, nameOld: this.state.currentUser.name, color: this.state.currentUser.color}});
      // this.socket.send(JSON.stringify(nameOld));
      this.socket.send(JSON.stringify(name));
    }
  };


//          RENDERING
  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>
    } else {
    return (
    <div>
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a> <a className="navbar-count"> {this.state.count} userCount</a>
    </nav>
      <MessageList currentUser={this.state.currentUser} messages={this.state.messages} exampleSocket={this.socket}/>
      <ChatBar currentUser={this.state.currentUser} addMessage={this.addMessage} exampleSocket={this.socket} onNameChange={this.onNameChange}/>
    </div>
      );
    }
  }
}

export default App;
