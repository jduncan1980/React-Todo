import React from 'react';
import Todo from './Todo';
import { Grid } from '@material-ui/core';

function TodoList(props) {
	return (
		<>
			{props.todos
				.filter((todo) => todo.task.includes(props.searchText))
				.map((todo) => {
					return (
						<Grid item key={todo.id}>
							<Todo
								task={todo.task}
								completed={todo.completed}
								handleMarkCompleted={props.handleMarkCompleted}
								todo={todo}
							/>
						</Grid>
					);
				})}
		</>
	);
}

export default TodoList;
