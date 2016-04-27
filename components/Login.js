const React = require('react');
const Router = require('react-router');

const Login = React.createClass({
    handleSubmit(e){
        Router.browserHistory.push('/');
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
                <input type="email" className="form-control" placeholder="Email" required="required" />
                <span className="glyphicon glyphicon-envelope form-control-feedback" />
              </div>
              <div className="form-group has-feedback">
                <input type="password" className="form-control" placeholder="Password" required="required" />
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
