import React from 'react';
import Todo from './Todo';
import { Grid } from '@material-ui/core';

function TodoList(props) {
	return (
		<>
			{props.todos.map((todo) => {
				return (
					<Grid item>
						<Todo
							task={todo.task}
							key={todo.id}
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
