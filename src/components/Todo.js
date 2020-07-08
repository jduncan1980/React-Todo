import React from 'react';
import { Chip } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const TodoChip = styled(({ color, ...other }) => <Chip {...other} />)({
	background: (props) =>
		props.completed === 'completed'
			? 'linear-gradient(45deg, #d73b2b 30%, #91251a 90%)'
			: 'linear-gradient(45deg, #61e81b 30%, #419615 90%)',
	// border: 0,
	// borderRadius: 3,
	boxShadow: (props) =>
		props.completed === 'completed'
			? '0 3px 5px 2px rgba(63,28,17,0.46)'
			: '0 3px 5px 2px rgba(33,63,17,0.46)',
	color: 'white',
	height: 48,
	padding: '0 30px',
	margin: 8,
	textDecoration: (props) =>
		props.completed === 'completed' ? 'line-through' : 'none',
});

function Todo(props) {
	return (
		<div>
			<TodoChip
				onClick={() => props.handleMarkCompleted(props.todo)}
				label={props.task}
				completed={props.completed ? 'completed' : null}
			/>
		</div>
	);
}

export default Todo;
