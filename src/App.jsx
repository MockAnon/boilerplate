// import data from "./data.json"; //added import data

// {
//   currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
//   messages: [
//     {
//       username: "Bob",
//       content: "Has anyone seen my marbles?",
//     },
//     {
//       username: "Anonymous",
//       content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
//     }
//   ]
//

import React, {Component} from 'react';
import MessageList from './MessageList.jsx';


import ChatBar from './ChatBar.jsx'; //chatBar






class App extends Component {

  constructor(props) { ///set initial state
    super(props);
    this.state = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      id: "A01",
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      id: "A02",
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]}
}

//mountcode part 2

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }

////adding messages
addMessage = (message, username) => {

    // console.log(oldMessages);
    const newChat = {
      id: "A03",
      username: username,
      content: message,
    };

    const messages = [...this.state.messages, newChat]
    console.log(messages);

    // delete later
    const age = 50
    const props = {
      name: 'lighthouse labs',
      age
    }

    // // destructuring assignment
    // const { name } = props
    // const name = props.name

    // // end of delete later


    this.setState({ messages });
    // // console.log(this.setState);
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>
    } else {
    return (
    <div>
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
    </nav>


      <MessageList messages={this.state.messages}/>

      <ChatBar currentUser={this.state.currentUser} addMessage={this.addMessage}/>

    </div>

      );
    }
  }
}
export default App;
