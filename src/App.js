import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [
				{
					task: 'Organize Garage',
					id: 1528817077286,
					completed: false,
				},
				{
					task: 'Bake Cookies',
					id: 1528817084358,
					completed: true,
				},
			],
			newTask: '',
		};

		this.addTodo = this.addTodo.bind(this);
		this.handleNewTask = this.handleNewTask.bind(this);
		this.handleDeleteAllTasks = this.handleDeleteAllTasks.bind(this);
		this.handleMarkCompleted = this.handleMarkCompleted.bind(this);
		this.handleDeleteCompleted = this.handleDeleteCompleted.bind(this);
	}

	addTodo = (e) => {
		e.preventDefault();
		if (this.state.newTask !== '') {
			this.setState({
				tasks: [
					...this.state.tasks,
					{ task: this.state.newTask, id: Date.now(), completed: false },
				],
				newTask: '',
			});
		}
	};

	handleNewTask = (e) => {
		this.setState({ newTask: e.target.value });
	};

	handleDeleteAllTasks = () => {
		this.setState({ tasks: [] });
	};

	handleMarkCompleted = (task) => {
		const tempArray = this.state.tasks;
		const temp = tempArray.map((item) => {
			if (item.id === task.id) {
				item.completed = !item.completed;
			}
			return item;
		});
		this.setState({ tasks: [...temp] });
	};

	handleDeleteCompleted = () => {
		const temp = this.state.tasks.filter((task) => task.completed === false);
		this.setState({ tasks: temp });
	};

	render() {
		return (
			<Container fixed>
				<Grid container direction='column' alignItems='center' spacing={4}>
					<Grid item>
						<Typography variant='h1'>Welcome to your Todo App!</Typography>
					</Grid>
					<Grid item container direction='column' alignItems='center'>
						<TodoList
							todos={this.state.tasks}
							handleMarkCompleted={this.handleMarkCompleted}
						/>
					</Grid>
					<Grid item>
						<TodoForm
							addToDo={this.addTodo}
							handleNewTask={this.handleNewTask}
							newTask={this.state.newTask}
							handleDeleteAllTasks={this.handleDeleteAllTasks}
							deleteCompleted={this.handleDeleteCompleted}
						/>
					</Grid>
				</Grid>
			</Container>
		);
	}
}

export default App;
