import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Input from './Input';
import theme from '../theme';

const useStyles = makeStyles({
	searchBar: {
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
	},
	smallMargin: {
		[theme.breakpoints.down('xs')]: {
			margin: '5px 0',
		},
	},
});

function SearchBar({ searchText, handleSearch }) {
	const classes = useStyles();
	const handleChange = (e) => {
		handleSearch(e.target.value);
	};
	return (
		<>
			<AppBar position='fixed'>
				<Toolbar>
					<Grid
						container
						alignItems='center'
						justify='space-between'
						className={classes.searchBar}
					>
						<Grid item className={classes.smallMargin}>
							<Typography variant='h3' component='h1'>
								To-Do App
							</Typography>
						</Grid>
						<Grid item className={classes.smallMargin}>
							<Input
								value={searchText}
								onChange={handleChange}
								placeholder='Search'
								ariaLabel='search'
								icon={<SearchIcon />}
							/>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
}

export default SearchBar;
