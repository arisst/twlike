const React = require('react');
const Link = require('react-router').Link;

const Post = React.createClass({
  render() {
    return (
      <div className="post">
        <div className="user-block">
          <img className="img-circle img-bordered-sm" src="/design/admin-lte/dist/img/user1-128x128.jpg" alt="user image" />
          <span className="username">
            <Link to={"/"+this.props.userName}>{this.props.userName}</Link>
          </span>
          <span className="description">Shared publicly - {this.props.userTimestamp}</span>
        </div>
        { /* /.user-block */ }
        <p>{this.props.userPost}</p>
        <ul className="list-inline">
          <li><a href="#" className="link-black text-sm"><i className="fa fa-share margin-r-5" /> Share</a></li>
          <li><a href="#" className="link-black text-sm"><i className="fa fa-thumbs-o-up margin-r-5" /> Like</a>
          </li>
        </ul>
      </div>
      );
  }
});

module.exports = Post;
