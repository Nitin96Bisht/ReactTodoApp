var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

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
	handleAddTodo: function (text) {
		alert('New Todo:' + text);
	},
	render: function () {
		var {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoApp;