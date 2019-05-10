import React from 'react'
import NavBar from './navbar.js'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: true,
    }
  }
  render() {
    const test = this.state
    
    var commentData = [
  { 
    author:"Shawn Spencer", 
    text:"I've heard it both ways"
  },
  { 
    author:"Burton Guster", 
    text:"You hear about Pluto? That's messed up" 
  }
];
var CommentBox = React.createClass({
  getInitialState: function() {
    return {
      data: commentData
    }
  },
  handleCommentSubmit: function(comment) {
    this.props.data.push(comment);
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
  },
  render: function() {
    return (
      <div className="comment-box">
        <CommentForm data={this.props.data} onCommentSubmit={this.handleCommentSubmit} />
        <CommentList data={this.props.data} />
      </div>
    );
  }
});
var CommentList = React.createClass({
  render: function() {
    return (
      <div className="comment-list">
        {this.props.data.map(function(c){
          return (
            <Comment author={c.author} text={c.text} />
          );
        })}
      </div>
    );
  }
});
var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var authorVal = e.target[0].value.trim();
    var textVal = e.target[1].value.trim();
    if (!textVal || !authorVal) {
      return;
    }
    this.props.onCommentSubmit({author: authorVal, text: textVal});
    e.target[0].value = '';
    e.target[1].value = '';
    return;
  },
  render: function() {
    return(
      <form className="comment-form form-group" onSubmit={this.handleSubmit}>
        <div className="input-group">
          <span className="input-group-addon">Name</span>
          <input type="text" placeholder="Your name" className="form-control" />
        </div>
        <div className="input-group">
          <span className="input-group-addon">Comment</span>
          <input type="text" placeholder="Say something..." className="form-control" />
        </div>
        <input type="submit" value="Post" className="btn btn-primary" />
      </form>
    );
  }
});
var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="author">{this.props.author}</h2>
        {this.props.text}
      </div>
    );
  }
});
React.render(
  <CommentBox data={commentData} />,
  document.getElementById('app')
);
{/*
    return (
      <div id="holder">
      
      <NavBar />

        <div id="main-content" class="container">
              This page is currently in progress.<br></br>
              For information on the progress of our development, or if you
              are a COMP2930 instructor looking to contact us, 
              send an email to Team 36's communication liason:
              <br></br>
              Manuel Andaya: mandaya1@my.bcit.ca
              <br></br>
              For further viewing of VEN's project scope and design, check
              out our project pitch on <a href="https://urlzs.com/WQTA">youtube</a>.
              <br></br>
              <hr></hr>
              <br></br>
              
              
              
              
        </div>
        
    </div>
    )
    */}
  }
}

export default Contact
