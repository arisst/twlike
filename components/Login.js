const React = require('react');
const Router = require('react-router');
const Config = require('../Config');

const Login = React.createClass({
    getInitialState() {
        return {
            username: '',
            password: ''
        };
    },

    onChangeUsername: function(e) {
       this.setState({username: e.target.value});
    },

    onChangePassword: function(e) {
       this.setState({password: e.target.value});
    },

    handleSubmit(e){
        // console.log(this.state.username);
        // console.log(this.state.password);
        $.post(Config.API_URL+'auth', {username:this.state.username, password:this.state.password}, function (data, status) {
            console.log(data);
        })
        // Router.browserHistory.push('/');
        e.preventDefault();
    },
  render() {
    return (
      <section>
        <div className="login-box">
          <div className="login-logo">
            <a href="#"><b>TW</b>Like</a>
          </div>
          { /* /.login-logo */ }
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group has-feedback">
                <input type="text" onChange={this.onChangeUsername} value={this.state.username} className="form-control" placeholder="Email" required="required" />
                <span className="glyphicon glyphicon-envelope form-control-feedback" />
              </div>
              <div className="form-group has-feedback">
                <input type="password" onChange={this.onChangePassword} value={this.state.password} className="form-control" placeholder="Password" required="required" />
                <span className="glyphicon glyphicon-lock form-control-feedback" />
              </div>
              <div className="row">
                { /* /.col */ }
                <div className="col-xs-4 pull-right">
                  <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                </div>
                { /* /.col */ }
              </div>
            </form>
          </div>
          { /* /.login-box-body */ }
        </div>
        { /* /.login-box */ }
      </section>
      );
  }
});

module.exports = Login;
