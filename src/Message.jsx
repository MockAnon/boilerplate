import React, {Component} from 'react';

class Messages extends Component {
  render() {
    let content = '';
    if(this.props.message.content.includes('.png', '.jpg', '.jpeg'))
    {
      content = <img src={this.props.message.content}/>
      console.log(this.props.message.content);
    } else{
      content = this.props.message.content
    }


    return (
        <div className="this.props.message.id" key="message">
          <span style={{color: this.props.message.color}} className="message-username"> {this.props.message.username} </span>
          <span className="message-content"> {content} </span>
        </div>
    );
  }
}

export default Messages;