var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
var IndexRoute = require('react-router').IndexRoute;
var Login = require('./components/login');
var Dashboard = require('./components/dashboard');
var Profile = require('./components/profile');


var App = React.createClass({
   render: function(){
       return (<section>{this.props.children}</section>);
   }
});

var NotFoundPage = React.createClass({
   render: function(){
       return (<h2>404</h2>);
   }
});

ReactDOM.render(
   (
       <Router history={browserHistory}>
           <Route path="/" component={App}>
               <IndexRoute component={Dashboard} />
               <Route path="login" component={Login}/>
               <Route path="home" component={Dashboard}/>
               <Route path=":id" component={Profile}/>
               <Route path="*" component={NotFoundPage}/>
           </Route>
       </Router>
   ),
   document.getElementById('main')
);
