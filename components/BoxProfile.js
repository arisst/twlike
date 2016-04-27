const React = require('react');

const BoxProfile = React.createClass({
  render() {
    return (
      <div className="box-body box-profile">
        <img className="profile-user-img img-responsive img-circle" src="/design/admin-lte/dist/img/user4-128x128.jpg" alt="User profile picture" />
        <h3 className="profile-username text-center">Nina Mcintire</h3>
        <p className="text-muted text-center">Software Engineer</p>
        <ul className="list-group list-group-unbordered">
          <li className="list-group-item">
            <b>Followers</b> <a className="pull-right">1,322</a>
          </li>
          <li className="list-group-item">
            <b>Following</b> <a className="pull-right">543</a>
          </li>
        </ul>
      </div>
      );
  }
});

module.exports = BoxProfile;
