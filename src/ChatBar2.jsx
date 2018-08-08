import React, {Component} from 'react';


    // function onNameChange(evt) {
    //   evt.preventDefault();
    //   this.setState({ name: evt.target.value});
    // };

// const add123 = (name) => {
//   return name + 123
// }


class ChatBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.currentUser.name
    };
  }

  onNameChange = evt => {
    evt.preventDefault();
    this.setState({ name: evt.target.value});
  }

  onSubmit = evt => {
        if (evt.key == 'Enter'){
          evt.preventDefault();
          const username = this.state.name;
          const message = evt.target.value;
          this.props.addMessage(message, username);
          evt.target.value = "";
      }
    };


  render() {
    //   const onSubmit = evt => {
    //     if (evt.key == 'Enter'){
    //       evt.preventDefault();

    //       const username = this.state.name;
    //       const message = evt.target.value;
    //       this.props.addMessage(message, username);
    //       evt.target.value = "";
    //   }
    // };

    // const onNameChange = evt => {
    //   evt.preventDefault();
    //   this.setState({ name: evt.target.value});
    // };

    return (
    <footer>
    <form className="chatbar" name="form">
      <input className="chatbar-username" name="username" placeholder="Your Name (Optional)" onChange={this.onNameChange} defaultValue={this.props.currentUser.name}/>
      <input className="chatbar-message" name="message" placeholder="Type a message and hit ENTER" onKeyPress={this.onSubmit}/>
    </form>
    </footer>
    );
  }
}

export default ChatBar;




