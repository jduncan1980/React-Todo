import React, { Component } from 'react';
import {
	Grid,
	Button,
	AppBar,
	Toolbar,
	Dialog,
	TextField,
} from '@material-ui/core';
import theme from '../theme';
import { styled } from '@material-ui/core/styles';

const FormBar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'center',
});

const Form = styled(AppBar)({
	top: 'auto',
	bottom: 0,
});

const Container = styled(Grid)({
	justifyItems: 'space-between',
	alignItems: 'center',
	flexDirection: 'column',
});

const Item = styled(Grid)({
	margin: '0 2rem',
	[theme.breakpoints.down('sm')]: {
		margin: '5px 0',
	},
});

class TodoForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			item: '',
			open: false,
		};
	}

	handleChange = (e) => {
		this.setState({ item: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.item !== '') {
			this.props.addToDo(this.state.item);
		}
		this.setState({ item: '', open: false });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	handleDeleteAll = () => {
		this.props.handleDeleteAllTasks();
		this.setState({ open: false });
	};

	handleDeleteComplete = () => {
		this.props.deleteCompleted();
		this.setState({ open: false });
	};

	render() {
		return (
			<>
				<Form>
					<FormBar>
						<Button
							onClick={() => this.setState({ open: true })}
							variant='outlined'
							style={{ color: 'white' }}
						>
							Add/Edit Tasks
						</Button>
					</FormBar>
				</Form>

				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					repositionOnUpdate={false}
					style={{ padding: '30px' }}
				>
					<form onSubmit={this.handleSubmit} style={{ padding: '2rem' }}>
						<Container container>
							<Item item>
								<TextField
									placeholder='Enter Task'
									value={this.state.item}
									onChange={this.handleChange}
									ariaLabel='new-task'
									variant='outlined'
								/>
							</Item>
							<Item item>
								<Button type='submit' variant='contained' color='secondary'>
									Add Task
								</Button>
							</Item>
							<Item item>
								<Button
									onClick={this.handleDeleteComplete}
									variant='contained'
									color='secondary'
								>
									Delete Completed
								</Button>
							</Item>
							<Item item>
								<Button
									onClick={this.handleDeleteAll}
									variant='contained'
									color='secondary'
								>
									Delete All
								</Button>
							</Item>
						</Container>
					</form>
				</Dialog>
			</>
		);
	}
}

export default TodoForm;
