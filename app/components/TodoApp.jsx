var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			todos: [
				{
					id: 1,
					text: 'Wake up'
				},
				{
					id: 2,
					text: 'Walk'
				},
				{
					id: 3,
					text: 'Study'
				},
				{
					id: 4,
					text: 'Eat'
				}
			]
		};
	},
	render: function () {
		var {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos}/>
			</div>
		);
	}
});

module.exports = TodoApp;