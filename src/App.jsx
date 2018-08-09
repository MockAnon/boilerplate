// import data from "./data.json"; //added import data

import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx'; //chatBar

class App extends Component {
  constructor(props) { ///set initial state
    super(props);
    this.state = {
  currentUser: {name: "Bob", nameOld: ""}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: []
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

         //incoming message notification
      case "incomingNotification":
      // console.log("receivedNAme", objData);
      // onUpdateName(objData.name);
        // this.setState({ currentUser: {name: objData.name, nameOld: objData.nameOld});
        this.setState({
          messages: [
            ...this.state.messages,
            {username: null, content: `${objData.nameOld} has changed name to ${objData.name}`}
          ]
        });

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
      type: "postMessage"
    };
    this.socket.send(JSON.stringify(msg));
  }


  //   function onUpdateName(username) {
  //     evt.preventDefault();
  //   // Construct a msg object containing the data the server needs to process the message from the chat client.
  //   console.log(JSON.stringify(username));
  //   return JSON.stringify(username);
  // }


    onNameChange = evt => {
      evt.preventDefault();
      const newName= evt.target.value;
      console.log("printing out name", evt.target.value);
      const name = {
        name: newName,
        type: "postNotification",
        nameOld: this.state.currentUser.name,
      }

      this.setState({ currentUser: {name: newName, nameOld: this.state.currentUser.name}});


      // this.socket.send(JSON.stringify(nameOld));
      this.socket.send(JSON.stringify(name));

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
      <MessageList currentUser={this.state.currentUser} messages={this.state.messages} exampleSocket={this.socket}/>
      <ChatBar currentUser={this.state.currentUser} addMessage={this.addMessage} exampleSocket={this.socket} onNameChange={this.onNameChange}/>
    </div>
      );
    }
  }
}

export default App;
