import React from 'react';
import Todo from './Todo';
import { Grid } from '@material-ui/core';

function TodoList({ searchText, handleMarkCompleted, todos }) {
	return (
		<>
			{todos
				.filter((todo) => todo.task.includes(searchText))
				.map((todo) => {
					return (
						<Grid item key={todo.id} style={{ maxWidth: '90%' }}>
							<Todo
								task={todo.task}
								completed={todo.completed}
								handleMarkCompleted={handleMarkCompleted}
								todo={todo}
							/>
						</Grid>
					);
				})}
		</>
	);
}

export default TodoList;
