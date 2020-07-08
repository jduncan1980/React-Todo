import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core';

export default class TodoForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			item: '',
		};
	}

	handleChange = (e) => {
		this.setState({ item: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.item);
		if (this.state.item !== '') {
			this.props.addToDo(this.state.item);
		}
		this.setState({ item: '' });
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<Grid container direction='column' alignItems='center' spacing={2}>
					<Grid item>
						<TextField
							type='text'
							id='task'
							name='task'
							placeholder='Enter Task'
							value={this.state.item}
							onChange={this.handleChange}
						/>
					</Grid>
					<Grid item>
						<Button type='submit' variant='contained' color='primary'>
							Add Task
						</Button>
					</Grid>
					<Grid item>
						<Button
							onClick={this.props.deleteCompleted}
							variant='contained'
							color='primary'
						>
							Delete Completed
						</Button>
					</Grid>
					<Grid item>
						<Button
							onClick={this.props.handleDeleteAllTasks}
							variant='contained'
							color='secondary'
						>
							Delete All
						</Button>
					</Grid>
				</Grid>
			</form>
		);
	}
}
