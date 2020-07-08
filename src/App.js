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
		};
	}

	componentDidMount() {
		if (localStorage.getItem('tasks')) {
			this.setState({ tasks: JSON.parse(localStorage.getItem('tasks')) });
		}
	}

	componentDidUpdate() {
		localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
	}

	addTodo = (newTask) => {
		this.setState({
			tasks: [
				...this.state.tasks,
				{ task: newTask, id: Date.now(), completed: false },
			],
		});
	};

	// handleNewTask = (e) => {
	// 	this.setState({ newTask: e.target.value });
	// };

	handleDeleteAllTasks = () => {
		this.setState({ tasks: [] });
	};

	handleMarkCompleted = (task) => {
		this.setState({
			tasks: this.state.tasks.map((currentTask) => {
				if (currentTask.id === task.id) {
					currentTask.completed = !currentTask.completed;
				}
				return currentTask;
			}),
		});
	};

	handleDeleteCompleted = () => {
		this.setState({
			tasks: this.state.tasks.filter((task) => task.completed === false),
		});
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
							// handleNewTask={this.handleNewTask}
							// newTask={this.state.newTask}
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
