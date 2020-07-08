import React from 'react';
import { Grid, Button, TextField } from '@material-ui/core';

function TodoForm(props) {
	return (
		<form onSubmit={props.addToDo}>
			<Grid container direction='column' alignItems='center' spacing={2}>
				<Grid item>
					<TextField
						type='text'
						id='task'
						name='task'
						placeholder='Enter Task'
						value={props.newTask}
						onChange={props.handleNewTask}
					/>
				</Grid>
				<Grid item>
					<Button type='submit' variant='contained' color='primary'>
						Add Task
					</Button>
				</Grid>
				<Grid item>
					<Button
						onClick={props.deleteCompleted}
						variant='contained'
						color='primary'
					>
						Delete Completed
					</Button>
				</Grid>
				<Grid item>
					<Button
						onClick={props.handleDeleteAllTasks}
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

export default TodoForm;
