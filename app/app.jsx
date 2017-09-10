var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

//load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//add css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<TodoApp/>,
	document.getElementById('app')
);