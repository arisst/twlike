const React = require('react');
const Link = require('react-router').Link;

const MainHeader = React.createClass({
  render() {
    return (
      <header className="main-header">
        <nav className="navbar navbar-static-top">
          <div className="navbar-header">
            <Link to="/home" className="navbar-brand"><b>TW</b>Like</Link>

            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
              <i className="fa fa-bars" />
            </button>
          </div>
          { /* Navbar Right Menu */ }
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              { /* User Account Menu */ }
              <li className="dropdown user user-menu">
                { /* Menu Toggle Button */ }
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  { /* The user image in the navbar*/ }
                  <img src="/design/admin-lte/dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                  { /* hidden-xs hides the username on small devices so only the image appears. */ }
                  <span className="hidden-xs">Alexander Pierce</span>
                </a>
                <ul className="dropdown-menu">
                  { /* The user image in the menu */ }
                  <li className="user-header">
                    <img src="/design/admin-lte/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                    <p>
                      Alexander Pierce - Web Developer
                      <small>Member since Nov. 2012</small>
                    </p>
                  </li>
                  { /* Menu Body */ }
                  <li className="user-body">
                    <div className="row">
                      <div className="col-xs-4 text-center">
                        <a href="#">Followers</a>
                      </div>
                      <div className="col-xs-4 text-center">
                        <a href="#">Sales</a>
                      </div>
                      <div className="col-xs-4 text-center">
                        <a href="#">Friends</a>
                      </div>
                    </div>
                    { /* /.row */ }
                  </li>
                  { /* Menu Footer*/ }
                  <li className="user-footer">
                    <div className="pull-left">
                      <a href="#" className="btn btn-default btn-flat">Profile</a>
                    </div>
                    <div className="pull-right">
                      <Link to="/login" className="btn btn-default btn-flat">Sign out</Link>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          { /* /.navbar-custom-menu */ }
          { /* /.container-fluid */ }
        </nav>
      </header>
      );
  }
});

module.exports = MainHeader;
