import React, { Fragment } from 'react';
import {
	Container,
	Grid,
	ThemeProvider,
	Typography,
	CssBaseline,
} from '@material-ui/core';
import Media from 'react-media';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import MobileForm from './components/MobileForm';
import SearchBar from './components/SearchBar';
import theme from './theme';

class App extends React.Component {
	constructor() {
		super();
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
			searchText: '',
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

	handleSearch = (text) => {
		this.setState({ searchText: text });
	};

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
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Container fixed>
					<SearchBar
						handleSearch={this.handleSearch}
						searchText={this.state.searchText}
					/>
					<Grid container direction='column' alignItems='center' spacing={4}>
						{this.state.tasks.length === 0 ? (
							<Typography
								variant='h2'
								component='h2'
								style={{ marginTop: '2rem' }}
							>
								You have nothing to do...
							</Typography>
						) : (
							<Media
								queries={{
									small: '(max-width: 719px)',
									medium: '(min-width: 720px)',
								}}
							>
								{(matches) => (
									<Fragment>
										{matches.small && (
											<Grid
												item
												container
												direction='column'
												alignItems='center'
												style={{ marginTop: '2rem', marginLeft: '-16px' }}
												spacing={2}
											>
												<TodoList
													todos={this.state.tasks}
													handleMarkCompleted={this.handleMarkCompleted}
													searchText={this.state.searchText}
												/>
											</Grid>
										)}
										{matches.medium && (
											<Grid
												item
												container
												direction='row'
												justify='space-between'
												alignItems='center'
												style={{ marginTop: '2rem' }}
												// spacing={2}
											>
												<TodoList
													todos={this.state.tasks}
													handleMarkCompleted={this.handleMarkCompleted}
													searchText={this.state.searchText}
												/>
											</Grid>
										)}
									</Fragment>
								)}
							</Media>
						)}

						<Grid item>
							<Media
								queries={{
									small: '(max-width: 719px)',
									medium: '(min-width: 720px)',
								}}
							>
								{(matches) => (
									<Fragment>
										{matches.small && (
											<MobileForm
												addToDo={this.addTodo}
												handleDeleteAllTasks={this.handleDeleteAllTasks}
												deleteCompleted={this.handleDeleteCompleted}
											/>
										)}
										{matches.medium && (
											<TodoForm
												addToDo={this.addTodo}
												handleDeleteAllTasks={this.handleDeleteAllTasks}
												deleteCompleted={this.handleDeleteCompleted}
											/>
										)}
									</Fragment>
								)}
							</Media>
						</Grid>
					</Grid>
				</Container>
			</ThemeProvider>
		);
	}
}

export default App;
