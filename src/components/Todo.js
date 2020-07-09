import React from 'react';
import { Chip } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import theme from '../theme';

const TodoChip = styled(({ color, ...other }) => <Chip {...other} />)({
	background: (props) =>
		props.completed === 'completed'
			? 'linear-gradient(45deg, #d73b2b 30%, #91251a 90%)'
			: 'linear-gradient(45deg, #36bda9 30%, #36adb3 90%)',
	boxShadow: (props) =>
		props.completed === 'completed'
			? '0 3px 5px 2px rgba(63,28,17,0.1)'
			: '0 3px 5px 2px rgba(33,63,17,0.1)',
	color: 'white',
	height: '5rem',
	width: '100%',
	padding: '0 30px',
	margin: 4,
	fontSize: '2rem',
	textDecoration: (props) =>
		props.completed === 'completed' ? 'line-through' : 'none',
	overflowWrap: 'break-word',
	[theme.breakpoints.down('sm')]: {
		fontSize: '1.5rem',
		textOverflow: 'scroll',
	},
});

function Todo({ handleMarkCompleted, task, completed, todo }) {
	return (
		<TodoChip
			onClick={() => handleMarkCompleted(todo)}
			label={task}
			completed={completed ? 'completed' : null}
		/>
	);
}

export default Todo;
