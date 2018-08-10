import React, {Component} from 'react';

class ChatBar extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     name: props.currentUser.name
  //   };
  // }

  // onNameChange = evt => {
  //     evt.preventDefault();
  //     this.setState({ name: evt.target.value});
  //   };

  onSubmit = evt => {
          if (evt.key == 'Enter'){
            evt.preventDefault();
            const message = evt.target.value;
            evt.target.value = "";

            const username = this.props.currentUser.name;

            this.props.addMessage(message, username);



        }
      };

  render() {
    return (
    <footer>
    <form className="chatbar" name="form">
      <input className="chatbar-username" name="username" placeholder="Your Name (Optional)" onKeyPress={this.props.onNameChange} defaultValue={this.props.currentUser.name}/>
      <input className="chatbar-message" name="message" placeholder="Type a message and hit ENTER" onKeyPress={this.onSubmit}/>
    </form>
    </footer>
    );
  }
}

export default ChatBar;