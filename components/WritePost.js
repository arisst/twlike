const React = require('react');
const Router = require('react-router');
const BrowserHistory = require('react-router');
const Config = require('../config');

const WritePost = React.createClass({
  getInitialState: function() {
     return {text: ''};
  },

  onChange: function(e) {
     this.setState({text: e.target.value});
  },

  onBtnClick: function(e) {
     $.post(Config.API_URL+"posts", {userId:Config.USER_ID, post:this.state.text}, function(data, status) {
       console.log(data);
     });
     this.setState({text: ''});
     e.preventDefault();
  },

  render() {
    return (
      <div className="row">
        <div className="box box-solid">
          <div className="box-header with-border">
            <h3 className="box-title">Write post</h3>
          </div>
          <div className="box-body">
            <input onChange={this.onChange} value={this.state.text} className="form-control input-lg" placeholder="What's in your mind?" />
          </div>
          <div className="box-footer">
            <button onClick={this.onBtnClick} type="submit" className="btn btn-info pull-right">Send</button>
          </div>
        </div>
      </div>
      );
  }
});

module.exports = WritePost;
