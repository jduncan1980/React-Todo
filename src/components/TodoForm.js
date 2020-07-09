import React, { Component } from 'react';
import { Grid, Button, AppBar, Toolbar } from '@material-ui/core';
import Input from './Input';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { styled } from '@material-ui/core/styles';

const FormBar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'center',
});

const Form = styled(AppBar)({
	top: 'auto',
	bottom: 0,
});

class TodoForm extends Component {
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
			<>
				<Form>
					<FormBar>
						<form onSubmit={this.handleSubmit}>
							<Grid
								container
								justify='space-between'
								alignItems='center'
								spacing={4}
								wrap='nowrap'
							>
								<Grid item>
									<Input
										placeholder='Enter Task'
										value={this.state.item}
										onChange={this.handleChange}
										ariaLabel='new-task'
										icon={<AssignmentIcon />}
									/>
								</Grid>
								<Grid item>
									<Button type='submit' variant='contained' color='secondary'>
										Add Task
									</Button>
								</Grid>
								<Grid item>
									<Button
										onClick={this.props.deleteCompleted}
										variant='contained'
										color='secondary'
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
					</FormBar>
				</Form>
			</>
		);
	}
}

export default TodoForm;
