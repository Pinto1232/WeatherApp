import { Box, Grid, ListItem } from '@mui/material';
import React from 'react';
import WorkCards from './WorkCards';
import WorkHeader from './WorkHeader';

const WorkSection = () => {
	return (
		<div>
			<Grid container xs={12} className=' bg-smooth-black mt-10 mb-20 '>
				<Box>
					<WorkHeader />
					<WorkCards />
				</Box>
			</Grid>
		</div>
	);
};

export default WorkSection;
