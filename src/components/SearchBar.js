import React from 'react';
import { TextField, AppBar, Toolbar } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const Input = styled(TextField)({
	backgroundColor: 'white',
	color: 'black',
	margin: '0 auto',
	width: '30%',
});

export default function SearchBar(props) {
	return (
		<>
			<AppBar position='fixed' color='primary'>
				<Toolbar>
					<Input
						value={props.searchText}
						onChange={(e) => props.handleSearch(e.target.value)}
						label='Search...'
						variant='filled'
						name='search'
					/>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
}
