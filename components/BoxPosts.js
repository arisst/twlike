const React = require('react');
const Post = require('./Post');
const Config = require('../Config');

const BoxPosts = React.createClass({
    getInitialState() {
        return {
            users: [
                {
                  postId: 6,
                  userId: 7,
                  timestamp: 20160413150648,
                  post: "initial post",
                  username: "init_user"
                },
            ]
        };
    },

    componentDidMount: function() {
       fetch(Config.API_URL+'timeline/'+Config.USER_ID).then(function(response) {
         return response.json();
       }).then(function(j) {
         this.setState({users: j.data});
       }.bind(this));

     },

    render() {
        var userList = this.state.users.map(function(users, i) {
            return (
                <Post key={i} userName={users.username} userPost={users.post} userTimestamp={users.timestamp}></Post>
            );
        });
        return (
            <div className="box-body">
                {userList}
            </div>
        );
    }
});

module.exports = BoxPosts;
